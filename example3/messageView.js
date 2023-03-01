class MessageView {
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
    console.log("Thanks for clicking me!");
  }

  hideMessage() {
    const removeMessage = document.getElementById("message");
    this.mainContainerEl.remove(removeMessage);
    console.log("message removed");
  }
}

module.exports = MessageView;
