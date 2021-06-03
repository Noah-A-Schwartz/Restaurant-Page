//Loads home page
import {loadHeader} from './header'
const loadHome = () =>{

    let body = document.getElementsByTagName("body")[0];
    //create content div
    let content = document.getElementById("content");
    content.innerHTML = "";
    let img = document.createElement("img");
    img.id = "chicken-img";
    img.src = ".\\Resources\\fried-chicken.png";
    content.append(img);

    let homeText = document.createElement("p1");
    homeText.id = "home-text";
    homeText.textContent = '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo."'
    content.append(homeText);
    body.append(content);

}



export {loadHome}