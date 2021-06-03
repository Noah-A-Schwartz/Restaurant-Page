import {loadHeader} from './header'

const loadContact = () => {
    let content = document.getElementById("content");
    content.innerHTML = "";
    let headText = document.createElement("h1");
    headText.textContent = "Contact Information";
    content.append(headText);
    
}
export {loadContact}