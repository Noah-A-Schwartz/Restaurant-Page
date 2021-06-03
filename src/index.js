import {loadHome} from './home'
import {loadMenu} from './menu'
import {loadContact} from './contact'
import { loadHeader } from './header';
let currentPage = "home"

loadHeader();
let content = document.createElement("div");
content.innerHTML = "";
content.id = 'content';
let body = document.getElementsByTagName("body")[0];
body.append(content);
loadHome();

let home = document.getElementsByTagName("li")[0];
let menu = document.getElementsByTagName("li")[1];
let contact = document.getElementsByTagName("li")[2];

home.addEventListener("click", loadHome);
menu.addEventListener("click", loadMenu);
contact.addEventListener("click", loadContact);



