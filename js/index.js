function masquerAbout() {
    console.log("le nom de l'entreprise a été cliqué");
    //action qui permet de masquer les éléments
    document.getElementById("description").style.display = "block";

    document.getElementsByClassName("description")[1].style.display = "none";
}

function changeBackground(id, color) {
    document.getElementById(id).style.backgroundColor = color;
    document.getElementById("information-1").style.backgroundColor = color;
    document.getElementById("information-2").style.backgroundColor = color;
    document.getElementById("information-3").style.backgroundColor = color;
    document.getElementById("information-4").style.backgroundColor = color;
    document.getElementById("information-5").style.backgroundColor = color;
    document.getElementById("information-6").style.backgroundColor = color;
    

}