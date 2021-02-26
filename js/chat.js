class Chat {
    constructor(name, messages = []) {
      // create an id for the chat
      this.id = Utils.getNewId('chat-')
      this.name = name;
      this.messages = messages;
    }
    addMessage(message) {
      this.messages.push(message);
    }
  }