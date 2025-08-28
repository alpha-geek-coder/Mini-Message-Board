import { postMessage, getLinks, getMessages } from "../db.js";

export async function createMessage(req, res, next) {
    req.body.added = new Date();
    postMessage(req.body);
    res.redirect('/index.html');
}

export async function getNewMessage(req, res, next) {
    res.render('new', {title: 'New Message', links: getLinks()});
}

export async function getMessage(req, res, next) {
    const messageId = req.params.index;
    const message = getMessages()[messageId];
  res.render("details", { title: "Message Details", links: getLinks(), message  });
}