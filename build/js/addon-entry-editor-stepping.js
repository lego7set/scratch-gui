(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-editor-stepping"],{

/***/ "./src/addons/addons/debugger/module.js":
/*!**********************************************!*\
  !*** ./src/addons/addons/debugger/module.js ***!
  \**********************************************/
/*! exports provided: isPaused, setPaused, onPauseChanged, onSingleStep, getRunningThread, singleStep, setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPaused", function() { return isPaused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPaused", function() { return setPaused; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPauseChanged", function() { return onPauseChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSingleStep", function() { return onSingleStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRunningThread", function() { return getRunningThread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleStep", function() { return singleStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
 /* inserted by pull.js */

// https://github.com/LLK/scratch-vm/blob/bb352913b57991713a5ccf0b611fda91056e14ec/src/engine/thread.js#L198
const STATUS_RUNNING = 0;
const STATUS_PROMISE_WAIT = 1;
const STATUS_YIELD = 2;
const STATUS_YIELD_TICK = 3;
const STATUS_DONE = 4;
let vm;
let paused = false;
let pausedThreadState = new WeakMap();
let pauseNewThreads = false;
let steppingThread = null;
const eventTarget = new _event_target_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
let audioContextStateChange = Promise.resolve();
const isPaused = () => paused;
const pauseThread = thread => {
  if (thread.updateMonitor || pausedThreadState.has(thread)) {
    // Thread is already paused or shouldn't be paused.
    return;
  }
  const pauseState = {
    time: vm.runtime.currentMSecs,
    status: thread.status
  };
  pausedThreadState.set(thread, pauseState);

  // Pausing a thread now works by just setting its status to STATUS_PROMISE_WAIT.
  // At the start of each frame, we make sure each paused thread is still paused.
  // This is really the best way to implement this.
  // Converting thread.status into a getter/setter causes Scratch's sequencer to permanently
  //    perform significantly slower in some projects. I think this is because it causes some
  //    very hot functions to be deoptimized.
  // Trapping sequencer.stepThread to no-op for a paused thread causes Scratch's sequencer
  //    to waste 24ms of CPU time every frame because it thinks a thread is running.
  thread.status = STATUS_PROMISE_WAIT;
};
const ensurePausedThreadIsStillPaused = thread => {
  if (thread.status === STATUS_DONE) {
    // If a paused thread is finished by single stepping, let it keep being done.
    return;
  }
  const pauseState = pausedThreadState.get(thread);
  if (pauseState) {
    if (thread.status !== STATUS_PROMISE_WAIT) {
      // We'll record the change so we can properly resume the thread, but the thread must still be paused for now.
      pauseState.status = thread.status;
      thread.status = STATUS_PROMISE_WAIT;
    }
  }
};
const setSteppingThread = thread => {
  steppingThread = thread;
};
const compensateForTimePassedWhilePaused = (thread, pauseState) => {
  // TW: Compiled threads store their timer in a different place.
  if (thread.timer) {
    thread.timer.startTime += vm.runtime.currentMSecs - pauseState.time;
  }
  const stackFrame = thread.peekStackFrame();
  if (stackFrame && stackFrame.executionContext && stackFrame.executionContext.timer) {
    stackFrame.executionContext.timer.startTime += vm.runtime.currentMSecs - pauseState.time;
  }
};
const stepUnsteppedThreads = lastSteppedThread => {
  // If we paused in the middle of a tick, we need to make sure to step the scripts that didn't get
  // stepped in that tick to avoid affecting project behavior.
  const threads = vm.runtime.threads;
  const startingIndex = getThreadIndex(lastSteppedThread);
  if (startingIndex !== -1) {
    for (let i = startingIndex; i < threads.length; i++) {
      const thread = threads[i];
      const status = thread.status;
      if (status === STATUS_RUNNING || status === STATUS_YIELD || status === STATUS_YIELD_TICK) {
        vm.runtime.sequencer.activeThread = thread;
        vm.runtime.sequencer.stepThread(thread);
      }
    }
  }
};
const setPaused = _paused => {
  const didChange = paused !== _paused;
  if (didChange) {
    paused = _paused;
    eventTarget.dispatchEvent(new CustomEvent("change"));
  }

  // Don't check didChange as new threads could've started that we need to pause.
  if (paused) {
    audioContextStateChange = audioContextStateChange.then(() => {
      return vm.runtime.audioEngine.audioContext.suspend();
    });
    if (!vm.runtime.ioDevices.clock._paused) {
      vm.runtime.ioDevices.clock.pause();
    }
    vm.runtime.threads.forEach(pauseThread);
    const activeThread = vm.runtime.sequencer.activeThread;
    if (activeThread) {
      setSteppingThread(activeThread);
      eventTarget.dispatchEvent(new CustomEvent("step"));
    }
  }

  // Only run unpausing logic when pause state changed to avoid unnecessary work
  if (!paused && didChange) {
    audioContextStateChange = audioContextStateChange.then(() => {
      return vm.runtime.audioEngine.audioContext.resume();
    });
    vm.runtime.ioDevices.clock.resume();
    for (const thread of vm.runtime.threads) {
      const pauseState = pausedThreadState.get(thread);
      if (pauseState) {
        compensateForTimePassedWhilePaused(thread, pauseState);
        thread.status = pauseState.status;
      }
    }
    pausedThreadState = new WeakMap();
    const lastSteppedThread = steppingThread;
    // This must happen after the "change" event is fired to fix https://github.com/ScratchAddons/ScratchAddons/issues/4281
    stepUnsteppedThreads(lastSteppedThread);
    steppingThread = null;
  }
};
const onPauseChanged = listener => {
  eventTarget.addEventListener("change", () => listener(paused));
};
const onSingleStep = listener => {
  eventTarget.addEventListener("step", listener);
};
const getRunningThread = () => steppingThread;

// A modified version of this function
// https://github.com/LLK/scratch-vm/blob/0e86a78a00db41af114df64255e2cd7dd881329f/src/engine/sequencer.js#L179
// Returns if we should continue executing this thread.
const singleStepThread = thread => {
  if (thread.status === STATUS_DONE) {
    return false;
  }
  // TW: Can't single-step compiled threads
  if (thread.isCompiled) {
    return false;
  }
  const currentBlockId = thread.peekStack();
  if (!currentBlockId) {
    thread.popStack();
    if (thread.stack.length === 0) {
      thread.status = STATUS_DONE;
      return false;
    }
  }
  pauseNewThreads = true;
  vm.runtime.sequencer.activeThread = thread;

  /*
    We need to call execute(this, thread) like the original sequencer. We don't
    have access to that method, so we need to force the original stepThread to run
    execute for us then exit before it tries to run more blocks.
    So, we make `thread.blockGlowInFrame = ...` throw an exception, so this line:
    https://github.com/LLK/scratch-vm/blob/bb352913b57991713a5ccf0b611fda91056e14ec/src/engine/sequencer.js#L214
    will end the function early. We then have to set it back to normal afterward.
     Why are we here just to suffer?
  */
  const specialError = ["special error used by Scratch Addons for implementing single-stepping"];
  Object.defineProperty(thread, "blockGlowInFrame", {
    set(_block) {
      throw specialError;
    }
  });
  try {
    thread.status = STATUS_RUNNING;

    // Restart the warp timer on each step.
    // If we don't do this, Scratch will think a lot of time has passed and may yield this thread.
    if (thread.warpTimer) {
      thread.warpTimer.start();
    }
    try {
      vm.runtime.sequencer.stepThread(thread);
    } catch (err) {
      if (err !== specialError) throw err;
    }
    if (thread.status !== STATUS_RUNNING) {
      return false;
    }
    if (thread.peekStack() === currentBlockId) {
      thread.goToNextBlock();
    }
    while (!thread.peekStack()) {
      thread.popStack();
      if (thread.stack.length === 0) {
        thread.status = STATUS_DONE;
        return false;
      }
      const stackFrame = thread.peekStackFrame();
      if (stackFrame.isLoop) {
        if (thread.peekStackFrame().warpMode) {
          continue;
        } else {
          return false;
        }
      } else if (stackFrame.waitingReporter) {
        return false;
      }
      thread.goToNextBlock();
    }
    return true;
  } finally {
    pauseNewThreads = false;
    vm.runtime.sequencer.activeThread = null;
    Object.defineProperty(thread, "blockGlowInFrame", {
      value: currentBlockId,
      configurable: true,
      enumerable: true,
      writable: true
    });

    // Strictly this doesn't seem to be necessary, but let's make sure the thread is still paused after we step it.
    if (thread.status !== STATUS_DONE) {
      thread.status = STATUS_PROMISE_WAIT;
    }
  }
};
const getRealStatus = thread => {
  const pauseState = pausedThreadState.get(thread);
  if (pauseState) {
    return pauseState.status;
  }
  return thread.status;
};
const getThreadIndex = thread => {
  // We can't use vm.runtime.threads.indexOf(thread) because threads can be restarted.
  // This can happens when, for example, a "when I receive message1" script broadcasts message1.
  // The object in runtime.threads is replaced when this happens.
  if (!thread) return -1;
  return vm.runtime.threads.findIndex(otherThread => otherThread.target === thread.target && otherThread.topBlock === thread.topBlock && otherThread.stackClick === thread.stackClick && otherThread.updateMonitor === thread.updateMonitor);
};
const findNewSteppingThread = startingIndex => {
  const threads = vm.runtime.threads;
  for (let i = startingIndex; i < threads.length; i++) {
    const possibleNewThread = threads[i];
    if (possibleNewThread.updateMonitor) {
      // Never single-step monitor update threads.
      continue;
    }
    // TW: Can't single-step compiled threads
    if (possibleNewThread.isCompiled) {
      continue;
    }
    const status = getRealStatus(possibleNewThread);
    if (status === STATUS_RUNNING || status === STATUS_YIELD || status === STATUS_YIELD_TICK) {
      // Thread must not be running for single stepping to work.
      pauseThread(possibleNewThread);
      return possibleNewThread;
    }
  }
  return null;
};
const singleStep = () => {
  if (steppingThread) {
    const pauseState = pausedThreadState.get(steppingThread);
    // We can assume pauseState is defined as any single stepping threads must already be paused.

    // Make it look like no time has passed
    compensateForTimePassedWhilePaused(steppingThread, pauseState);
    pauseState.time = vm.runtime.currentMSecs;

    // Execute the block
    const continueExecuting = singleStepThread(steppingThread);
    if (!continueExecuting) {
      // Try to move onto the next thread
      steppingThread = findNewSteppingThread(getThreadIndex(steppingThread) + 1);
    }
  }

  // If we don't have a thread, than we are between VM steps and should search for a new thread
  if (!steppingThread) {
    setSteppingThread(findNewSteppingThread(0));

    // End of VM step, emulate one frame of time passing.
    vm.runtime.ioDevices.clock._pausedTime += vm.runtime.currentStepTime;
    // Skip all sounds forward by vm.runtime.currentStepTime milliseconds so it's as
    //  if they where playing for one frame.
    const audioContext = vm.runtime.audioEngine.audioContext;
    for (const target of vm.runtime.targets) {
      for (const soundId of Object.keys(target.sprite.soundBank.soundPlayers)) {
        const soundPlayer = target.sprite.soundBank.soundPlayers[soundId];
        if (soundPlayer.outputNode) {
          soundPlayer.outputNode.stop(audioContext.currentTime);
          soundPlayer._createSource();
          soundPlayer.outputNode.start(audioContext.currentTime, audioContext.currentTime - soundPlayer.startingUntil + vm.runtime.currentStepTime / 1000);
          soundPlayer.startingUntil -= vm.runtime.currentStepTime / 1000;
        }
      }
    }
    // Move all threads forward one frame in time. For blocks like `wait () seconds`
    for (const thread of vm.runtime.threads) {
      if (pausedThreadState.has(thread)) {
        pausedThreadState.get(thread).time += vm.runtime.currentStepTime;
      }
    }

    // Try to run edge activated hats
    pauseNewThreads = true;
    const hats = vm.runtime._hats;
    for (const hatType in hats) {
      if (!Object.prototype.hasOwnProperty.call(hats, hatType)) continue;
      const hat = hats[hatType];
      if (hat.edgeActivated) {
        vm.runtime.startHats(hatType);
      }
    }
    pauseNewThreads = false;
  }
  eventTarget.dispatchEvent(new CustomEvent("step"));
};
const setup = _vm => {
  if (vm) {
    return;
  }
  vm = _vm;
  const originalStepThreads = vm.runtime.sequencer.stepThreads;
  vm.runtime.sequencer.stepThreads = function () {
    if (isPaused()) {
      for (const thread of this.runtime.threads) {
        ensurePausedThreadIsStillPaused(thread);
      }
    }
    return originalStepThreads.call(this);
  };

  // Unpause when green flag
  const originalGreenFlag = vm.runtime.greenFlag;
  vm.runtime.greenFlag = function () {
    setPaused(false);
    return originalGreenFlag.call(this);
  };

  // Disable edge-activated hats and hats like "when key pressed" while paused.
  const originalStartHats = vm.runtime.startHats;
  vm.runtime.startHats = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const hat = args[0];
    // These hats can be manually started by the user when paused or while single stepping.
    const isUserInitiated = hat === "event_whenbroadcastreceived" || hat === "control_start_as_clone";
    if (pauseNewThreads) {
      if (!isUserInitiated && !this.getIsEdgeActivatedHat(hat)) {
        return [];
      }
      const newThreads = originalStartHats.apply(this, args);
      for (const thread of newThreads) {
        pauseThread(thread);
      }
      return newThreads;
    } else if (paused && !isUserInitiated) {
      return [];
    }
    return originalStartHats.apply(this, args);
  };

  // Paused threads should not be counted as running when updating GUI state.
  const originalGetMonitorThreadCount = vm.runtime._getMonitorThreadCount;
  vm.runtime._getMonitorThreadCount = function (threads) {
    let count = originalGetMonitorThreadCount.call(this, threads);
    if (paused) {
      for (const thread of threads) {
        if (pausedThreadState.has(thread)) {
          count++;
        }
      }
    }
    return count;
  };
};

/***/ }),

/***/ "./src/addons/addons/editor-stepping/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/editor-stepping/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-stepping/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-stepping/highlighter.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/editor-stepping/highlighter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SVG_NS = "http://www.w3.org/2000/svg";
const containerSvg = document.createElementNS(SVG_NS, "svg");
// unfortunately we can't use display: none on this as that breaks filters
containerSvg.style.position = "fixed";
containerSvg.style.top = "-999999px";
containerSvg.style.width = "0";
containerSvg.style.height = "0";
document.body.appendChild(containerSvg);
let nextGlowerId = 0;
const highlightsPerElement = new WeakMap();
const getHighlightersForElement = element => {
  if (!highlightsPerElement.get(element)) {
    highlightsPerElement.set(element, new Set());
  }
  return highlightsPerElement.get(element);
};
const updateHighlight = (element, highlighters) => {
  let result;
  for (const i of highlighters) {
    if (!result || i.priority > result.priority) {
      result = i;
    }
  }
  if (result) {
    element.style.filter = result.filter;
  } else {
    element.style.filter = "";
  }
};
const addHighlight = (element, highlighter) => {
  const highlighters = getHighlightersForElement(element);
  highlighters.add(highlighter);
  updateHighlight(element, highlighters);
};
const removeHighlight = (element, highlighter) => {
  const highlighters = getHighlightersForElement(element);
  highlighters.delete(highlighter);
  updateHighlight(element, highlighters);
};
class Highlighter {
  constructor(priority, color) {
    this.priority = priority;
    const id = "sa_glower_filter".concat(nextGlowerId++);
    this.filter = "url(\"#".concat(id, "\")");
    this.previousElements = new Set();
    const filterElement = document.createElementNS(SVG_NS, "filter");
    filterElement.id = id;
    filterElement.setAttribute("width", "180%");
    filterElement.setAttribute("height", "160%");
    filterElement.setAttribute("x", "-40%");
    filterElement.setAttribute("y", "-30%");
    const filterBlur = document.createElementNS(SVG_NS, "feGaussianBlur");
    filterBlur.setAttribute("in", "SourceGraphic");
    filterBlur.setAttribute("stdDeviation", "4");
    filterElement.appendChild(filterBlur);
    const filterTransfer = document.createElementNS(SVG_NS, "feComponentTransfer");
    filterTransfer.setAttribute("result", "outBlur");
    filterElement.appendChild(filterTransfer);
    const filterTransferTable = document.createElementNS(SVG_NS, "feFuncA");
    filterTransferTable.setAttribute("type", "table");
    filterTransferTable.setAttribute("tableValues", "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1");
    filterTransfer.appendChild(filterTransferTable);
    const filterFlood = document.createElementNS(SVG_NS, "feFlood");
    filterFlood.setAttribute("flood-opacity", "1");
    filterFlood.setAttribute("result", "outColor");
    filterElement.appendChild(filterFlood);
    this.filterFlood = filterFlood;
    const filterComposite = document.createElementNS(SVG_NS, "feComposite");
    filterComposite.setAttribute("in", "outColor");
    filterComposite.setAttribute("in2", "outBlur");
    filterComposite.setAttribute("operator", "in");
    filterComposite.setAttribute("result", "outGlow");
    filterElement.appendChild(filterComposite);
    const filterFinalComposite = document.createElementNS(SVG_NS, "feComposite");
    filterFinalComposite.setAttribute("in", "SourceGraphic");
    filterFinalComposite.setAttribute("in2", "outGlow");
    filterFinalComposite.setAttribute("operator", "over");
    filterElement.appendChild(filterFinalComposite);
    containerSvg.appendChild(filterElement);
    this.setColor(color);
  }
  setColor(color) {
    this.filterFlood.setAttribute("flood-color", color);
  }
  setGlowingThreads(threads) {
    const elementsToHighlight = new Set();
    const workspace = Blockly.getMainWorkspace();
    if (workspace) {
      for (const thread of threads) {
        thread.stack.forEach(blockId => {
          const block = workspace.getBlockById(blockId);
          if (!block) {
            return;
          }
          const childblock = thread.stack.find(i => {
            let b = block;
            while (b.childBlocks_.length) {
              b = b.childBlocks_[b.childBlocks_.length - 1];
              if (i === b.id) return true;
            }
            return false;
          });
          if (!childblock && block.svgPath_) {
            const svgPath = block.svgPath_;
            elementsToHighlight.add(svgPath);
          }
        });
      }
    }
    for (const element of this.previousElements) {
      if (!elementsToHighlight.has(element)) {
        removeHighlight(element, this);
      }
    }
    for (const element of elementsToHighlight) {
      if (!this.previousElements.has(element)) {
        addHighlight(element, this);
      }
    }
    this.previousElements = elementsToHighlight;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Highlighter);

/***/ }),

/***/ "./src/addons/addons/editor-stepping/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-stepping/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _debugger_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debugger/module.js */ "./src/addons/addons/debugger/module.js");
/* harmony import */ var _highlighter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlighter.js */ "./src/addons/addons/editor-stepping/highlighter.js");


/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const vm = addon.tab.traps.vm;
  const highlighter = new _highlighter_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, addon.settings.get("highlight-color"));
  addon.settings.addEventListener("change", () => {
    highlighter.setColor(addon.settings.get("highlight-color"));
  });
  addon.self.addEventListener("disabled", () => {
    highlighter.setGlowingThreads([]);
  });
  const oldStep = vm.runtime._step;
  vm.runtime._step = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    oldStep.call(this, ...args);
    if (!addon.self.disabled) {
      const runningThread = Object(_debugger_module_js__WEBPACK_IMPORTED_MODULE_0__["getRunningThread"])();
      const threads = vm.runtime.threads.filter(thread => thread !== runningThread && !thread.target.blocks.forceNoGlow && !thread.isCompiled);
      highlighter.setGlowingThreads(threads);
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-editor-stepping.js.map