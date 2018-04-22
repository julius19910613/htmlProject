window.onload = () =>{
    const placeholder = document.getElementById("placeholder");
    const description = document.getElementById("description");
}

function showPic(whichPic){
    
    let text = whichPic.getAttribute("title");
    let source = whichPic.getAttribute("href");
    placeholder.setAttribute("src", source)
    description.firstChild.nodeValue = text;

}