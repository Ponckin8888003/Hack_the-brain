let chatContent = document.querySelector(".chat-content");
let chatForm = document.querySelector(".chat-form");
let chatInput = document.querySelector(".chat-form-input");
let messageTemplate = document.querySelector("#message-template").content;
let chatMessageTemplate = messageTemplate.querySelector('.chat-message');

let chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

function updateLocalStorage() {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages))
}

function createMessage(name, text) {
    let message = chatMessageTemplate.cloneNode(true);
    let messageName = message.querySelector('.chat-message-name');
    let messageText = message.querySelector('.chat-message-text');
    let removeButton = message.querySelector('.chat-message-button');

    messageName.textContent = name;
    messageText.textContent = text;

    removeButton.addEventListener('click', function () {
        message.remove();
        chatMessages = chatMessages.filter(message => message !== text);
        updateLocalStorage();
    });

    chatContent.appendChild(message);
}

chatMessages.forEach(message => createMessage('', message));

chatForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    let messageText = chatInput.value.trim();
    if (messageText !== '') {
        createMessage('', messageText);
        chatInput.value = '';
        chatMessages.push(messageText);
        updateLocalStorage();
    }
});
