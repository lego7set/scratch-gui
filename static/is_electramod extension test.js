(function (Scratch) {
    "use strict";
class ElectraModDetector {
    getInfo() {
      return {
        id: 'electraModDetector',
        name: 'Electra Mod Detector',
        blocks: [
          {
            opcode: 'isElectraMod',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is ElectraMod?'
          }
        ]
      };
    }
  
    isElectraMod() {
      this.isem = Scratch.extensions.isElectraMod
    ? "true"  : "false";
  return this.isem
  
    }
  }
  
  Scratch.extensions.register(new ElectraModDetector());
})(Scratch);