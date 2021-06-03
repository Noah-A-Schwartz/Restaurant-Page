const loadHeader = () => {
    //Header Text
    let body = document.getElementsByTagName("body")[0];
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

}
export {loadHeader}