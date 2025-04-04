// server/data/users.js

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  
  module.exports = {
    getUsers: () => users,
    getUserById: (id) => users.find(user => user.id === id),
    addUser: (user) => {
      const newUser = { id: users.length + 1, ...user };
      users.push(newUser);
      return newUser;
    }
  };
  