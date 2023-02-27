class MessageView {
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
}

module.exports = MessageView;
