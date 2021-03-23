class Message {
   constructor(name,commands) {
     this.name = name;
     if (!name) {
       throw Errow("Message name required.");
     }
     this.commands = commands;  
  }
}

module.exports = Message;