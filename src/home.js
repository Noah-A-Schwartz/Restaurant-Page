//Loads home page

const loadHome = () =>{
    let body = document.getElementsByTagName("body")[0];

    //Header Text
    let header = document.createElement("header");
    body.append(header);
    header.append(document.createElement("h1"));
    document.getElementsByTagName("h1")[0].textContent = "Welcome to Noah's Fried Chicken";

    //nav
    let ul = document.createElement("ul");
    header.append(ul)
    ul.append(document.createElement("li"))
    ul.append(document.createElement("li"))
    ul.append(document.createElement("li"))
    document.getElementsByTagName('li')[0].textContent = "Home";
    document.getElementsByTagName('li')[1].textContent = "Menu";
    document.getElementsByTagName('li')[2].textContent = "Contact"
    




   


    //create content div
    let content = document.createElement("div");
    content.id = 'content';
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