/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
  });

  it("clicks the hide button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    const hideEl = document.querySelector("#hide-message-button");
    hideEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
