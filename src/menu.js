import {loadHeader} from './header'

const loadMenu = () => {

    let content = document.getElementById("content");
    content.innerHTML = "";
    let img = document.createElement("img");
    img.id = "menu-img";
    img.src = ".\\Resources\\menu.jpg";
    content.append(img);
}
export {loadMenu}