const chats = {};
const users = [];
let currentChat;
const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

document
  .getElementById('new-chat-button')
  .addEventListener('click', addNewChat);

print();

function print() {
  // chats
  let chatsHtml = '';
  //for in way
  // for (let chatId in chats) {
  //   chatsHtml += `<li class="list-group-item">${chats[chatId].name}</li>`;
  // }
  //forEach on the values
  Object.values(chats).forEach((chat) => {
    chatsHtml += `<li class="list-group-item" onclick="selectCurrentChat('${chat.id}')">${chat.name}</li>`;
  });
  document.getElementById('chats').innerHTML = chatsHtml;
  // current chat name
  document.getElementById('current-chat-name').innerText = currentChat.name;
  // current chat message window
  let chatWindowHtml = '';
  currentChat.messages.forEach((message) => {
    chatWindowHtml += `
        <div class="message">
            <p>${message.text}</p>
            <p>${message.username}</p>
        </div>
    `;
  });
  document.getElementById('chat-window').innerHTML = chatWindowHtml;
  // users
  let usersHtml = '';
  users.forEach((user) => {
    usersHtml += `
    <div>
        <label for="${user.username}">${user.username}</label>
        <input id="${user.username}">
    </div>`;
  });
  document.getElementById('users').innerHTML = usersHtml;
}

function addNewChat() {
  const chatName = document.getElementById('new-chat-input').value;
  if (chatName) {
    // create the chat
    const newChat = new Chat(chatName);
    // add chat to chats
    chats[newChat.id] = newChat;
    // clear out the input box
    document.getElementById('new-chat-input').value = '';
    //print again
    print();
  }
}

function selectCurrentChat(chatId) {
  currentChat = chats[chatId];
  // print again
  print();
}
