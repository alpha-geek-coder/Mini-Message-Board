
import {getMessages, getLinks} from '../db.js';
  
export async function getAllMessages(req, res, next) {

    res.render("index", { title: "Mini Messageboard", messages: getMessages(), links: getLinks()});
}