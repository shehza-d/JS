class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  send(message, to) {
    this.chatroom.send(message, this, to);
  }
  recieve(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// class Chatroom {
//   users = {};

//   register(user) {
//     users[user.name] = user;
//     user.chatroom = this;
//   }
//   send(message, from, to) {
//     if (to) {
//       // Single user message
//       to.recieve(message, from);
//     } else {
//       // Mass message
//       for (key in users) {
//         if (users[key] !== from) {
//           users[key].recieve(message, from);
//         }
//       }
//     }
//   }
// }

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.recieve(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send("Hello Jeff", jeff);
sara.send("Hello Brad, you are the best dev ever!", brad);
jeff.send("Hello Everyone!!!!");