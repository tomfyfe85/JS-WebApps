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
          this.hideEl = document.querySelector("#hide-message-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const newMessage = document.createElement("div");
          newMessage.setAttribute("id", "message");
          newMessage.innerText = "This message is displayed by JavaScript";
          this.mainContainerEl.append(newMessage);
          const newMessage = document.createElement("div");
          newMessage.id = "message";
          const inputEl = document.querySelector("#message-input");
          newMessage.innerText = inputEl.value;
          document.querySelector("#main-container").append(newMessage);
          inputEl.value = "";
          console.log("Thanks for clicking me!");
        }
        hideMessage() {
          document.querySelector("#message").remove();
          console.log("message removed");
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
