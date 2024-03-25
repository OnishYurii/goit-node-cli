const contacts = require("./src/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const contact = await contacts.getContactById(id);
      return console.log(contact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "Z5sbDlS7pCzNsnAHLtDJd" });
// invokeAction({
//   action: "add",
//   name: "Yurii",
//   email: "onik@gmail.com",
//   phone: "+335224343",
// });
