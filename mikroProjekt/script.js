const test = document.getElementById("con");


test.addEventListener("mouseover", (event)=>{
    editSwatch();
});

function editSwatch(){
    const elem = test.children.item(1);
    elem.setAttribute("class", "op");
}

