import {loadHeader} from './header'

const loadContact = () => {
    let content = document.getElementById("content");
    content.innerHTML = "";
    let headText = document.createElement("h1");
    headText.textContent = "Contact Information";
    content.append(headText);
    let bodyText = document.createElement("p");
    bodyText.innerHTML = "Open 24/7 comes see us any time!<br>Call Noah to order at 555-555-5555!";
    content.append(bodyText);

    
}
export {loadContact}