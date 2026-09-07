const XML_TYPE_REGEX = /type="([^"]+)"/;
const XML_BUILTIN_EXT = /pin-builtin="([^"]+)"/;
const XML_CUSTOM_EXT = /pin-custom="([^"]+)"/;

/**
 * Saves extension dependencies into a given pin list.
 * @param {Array<String>} pinList Array of pinned blocks as xml strings.
 * @param {VM} vm Virtual machine instance.
 * @returns {Array<String>} Pin list containing the extension dependency sources.
 */
const saveExtensionPinDependencies = function (pinList, vm) {
    const manager = vm.extensionManager;
    const loadedExtensions = manager._loadedExtensions;

    for (let i = 0; i < pinList.length; i++) {
        const xml = pinList[i];
        const match = xml.match(XML_TYPE_REGEX);
        if (!match) continue;

        const categoryId = match[1].split("_")[0];
        if (loadedExtensions.has(categoryId)) {
            const extensionMetaData = loadedExtensions.get(categoryId);
            let extSrcTag;

            if (extensionMetaData.startsWith("extension_")) {
                // This is a built-in extension
                extSrcTag = ` pin-builtin="${categoryId}"`;
            } else {
                // This is a custom extension
                const srcCodeIndex = Number(extensionMetaData.split(".")[1]);
                const srcCode = manager.workerURLs[srcCodeIndex];
                extSrcTag = ` pin-custom="${srcCode}"`;
            }

            if (!xml.includes(extSrcTag)) {
                pinList[i] = xml.replace(match[0], match[0] + extSrcTag);
            }
        }
    }

    return pinList;
};

/**
 * Loads extension dependencies from a pin list.
 * @param {Array<String>} pinList Array of pinned blocks as xml strings.
 * @param {VM} vm Virtual machine instance.
 */
const loadExtensionPinDependencies = function (pinList, vm) {
    const manager = vm.extensionManager;
    const loadedExtensions = manager._loadedExtensions;

    const builtInExts = new Set();
    const customExts = new Set();

    // Collect all extensions that need loading.
    for (let i = 0; i < pinList.length; i++) {
        const xml = pinList[i];
        const builtinExtMatch = xml.match(XML_BUILTIN_EXT);
        const customExtMatch = xml.match(XML_CUSTOM_EXT);

        if (builtinExtMatch) {
            builtInExts.add(builtinExtMatch[1]);
        }
        if (customExtMatch) {
            customExts.add(customExtMatch[1]);
        }
    }

    // Load the extensions.
    for (const ext of builtInExts) {
        if (!manager.isExtensionLoaded(ext)) {
            manager.loadExtensionIdSync(ext);
        }
    }
    for (const ext of customExts) {
        if (!manager.workerURLs.includes(ext)) {
            manager.securityManager.canLoadExtensionFromProject(ext).then(() => {
                manager.loadExtensionURL(ext);
            });
        }
    }
};

export {
    saveExtensionPinDependencies,
    loadExtensionPinDependencies
};