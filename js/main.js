const chats = {};
const tasks = {};
const users = [];
let currentChat;
let currentTask;


document
  .getElementById('new-chat-button')
  .addEventListener('click', addNewChat);

print();


function print() {
  // chats
  let chatsHtml = '';
  let tasksHtml = '';

  Object.values(chats).forEach((chat) => {
    chatsHtml += `<li class="list-group-item" onclick="selectCurrentChat('${chat.id}')">${chat.name}</li>`;
  });
  Object.values(tasks).forEach((task) => {
    tasksHtml += `<li class="list-group-item" onclick="selectCurrentTask('${task.id}')">${task.name}</li>`;
  });
  document.getElementById('chats').innerHTML = chatsHtml;
  document.getElementById('tasks').innerHTML = tasksHtml;

  // current chat name
  document.getElementById('current-chat-name').innerText = currentChat.name;
  document.getElementById('current-task-name').innerText = currentTask.name;

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
  let taskWindowHtml = '';
  currentTask.messages.forEach((message) => {
    taskWindowHtml += `
      <div class="message">
        <p>${message.text}</p>
        <p>${message.username}</p>
      </div>
      `;
  });
  document.getElementById('chat-window').innerHTML = chatWindowHtml;
  document.getElementById('task-window').innerHTML = taskWindowHtml;
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
    // create the list
    const newChat = new Chat(chatName);
    // add list to lists
    chats[newChat.id] = newChat;
    // clear out the input box
    document.getElementById('new-chat-input').value = '';
    //print again
    print();
  }
}
function addNewTask() {
  const taskName = document.getElementById('new-task-input').value;
  if (taskName) {
    // create the list
    const newTask = new Task(taskName);
    // add list to lists
    tasks[newTask.id] = newTask;
    // clear out the input box
    document.getElementById('new-task-input').value = '';
    //print again
    print();
  }
}
// function myFunction() {
//   let myobj = document.getElementById("new-chat-button");
//   myobj.remove();
// }

function selectCurrentChat(chatId) {
  currentChat = chats[chatId];
  // print again
  print();
}
function selectCurrentTask(taskId) {
  currentTask = tasks[taskId];
  // print again
  print();
}

