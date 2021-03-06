class Task {
    constructor(name, messages = []) {
      // create an id for the chat
      this.id = Utils.getNewId('task-')
      this.name = name;
      this.messages = messages;
    }
    addMessage(message) {
      this.messages.push(message);
    }
  }