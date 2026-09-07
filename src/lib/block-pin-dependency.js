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
            if (extensionMetaData.startsWith("extension_")) {
                // This is a built-in extension
                pinList[i] = xml.replace(match[0], match[0] + ` pin-builtin="${categoryId}"`)
            } else {
                // This is a custom extension
                const srcCodeIndex = Number(extensionMetaData.split(".")[1]);
                const srcCode = manager.workerURLs[srcCodeIndex];
                pinList[i] = xml.replace(match[0], match[0] + ` pin-custom="${srcCode}"`)
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

    for (const ext of builtInExts) {
        manager.loadExtensionIdSync(ext);
    }
    for (const ext of customExts) {
        manager.securityManager.canLoadExtensionFromProject(ext).then(isUnsandbox => {
            if (isUnsandbox) {
                manager.loadExtensionURL(ext);
            }
        });
    }
};

export {
    saveExtensionPinDependencies,
    loadExtensionPinDependencies
};