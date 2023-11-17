function createElement(data) {
    var paragraph = document.createElement("p");
    paragraph.textContent = data;
    document.body.appendChild(paragraph);
}
