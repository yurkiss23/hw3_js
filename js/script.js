window.onload = function(){
    //alert("start!");

    document.getElementById("btnAdd").onclick = function(){
        var txtAdd = document.getElementById("txtAdd");
        var addImg = document.createElement("li");
        addImg.innerHTML =
            `<a href="${txtAdd.value}"><img src="${txtAdd.value}"/></a>`;
        list.insertBefore(addImg, list.firstChild);
        alert("image\n'" + txtAdd.value + "'\nadd");
        txtAdd.value = null;
    }
}