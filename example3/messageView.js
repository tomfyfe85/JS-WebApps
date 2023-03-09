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
    // newMessage.setAttribute("id", "message");
    newMessage.id = "message";
    const inputEl = document.querySelector("#message-input");
    newMessage.innerText = inputEl.value;
    // this.mainContainerEl.append(newMessage);
    document.querySelector("#main-container").append(newMessage);
    inputEl.value = "";
   
  }

  hideMessage() {
    // const removeMessage = document.getElementById("message");
    // this.mainContainerEl.remove(removeMessage);

    document.querySelector("#message").remove();
    console.log("message removed");
  }
}

module.exports = MessageView;
