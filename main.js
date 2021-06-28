var login = document.querySelector("#login")
var addDefinition = document.querySelector("#add-definition")
var liked = document.querySelector("#liked")


function toggle(element){
    if (element.innerText == 'Login') {
        element.innerText = 'Logout';
    } else {
        element.innerText = 'Login';
    }
}

function remove(element){
    element.remove()
}

function likey(){
    alert("Ninja was liked")
}








// function example(element) {
//     console.log("element clicked", element);
// }

// function turnOff(element) {
//     element.innerText = "Off";
// }
// function hide(element) {
//     element.remove();
// }
