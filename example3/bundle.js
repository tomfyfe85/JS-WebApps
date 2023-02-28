(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
        }
        displayMessage() {
          const newMessage = document.createElement("div");
          newMessage.setAttribute("id", "message");
          newMessage.innerText = "This message is displayed by JavaScript";
          this.mainContainerEl.append(newMessage);
          console.log("Thanks for clicking me!");
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
