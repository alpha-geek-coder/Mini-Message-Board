
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
export function getMessages() {
    return messages;
}


export function getLinks() {
    return [
        { href: "/", text: "Home" },
        { href: "/message/new", text: "New Message" },
      ];
}

export function postMessage(message) {
    messages.push(message);
}