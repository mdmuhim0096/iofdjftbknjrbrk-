
let flight = document.getElementById("flight");
let toTop = document.getElementById("toTop");

let tBtn = document.getElementById("toggleBtn");
let closeBtn = document.getElementById("close");
let menu = document.getElementById("menu");

tBtn.onclick = () => {
    menuTrue();
}
closeBtn.onclick = () => {
    menuFalse();
}

function menuTrue() {
    closeBtn.style.top = "0%";
    menu.style.left = "0%";
}
function menuFalse() {
    closeBtn.style.top = "-100%";
    menu.style.left = "-100%";
}

let link = document.querySelectorAll("#menu > ul > li > a");
link.forEach((data) => {
    data.addEventListener("click", () => {
        menuFalse();
    })
});

toTop.onclick = () => {
    flight.classList.add("takeOfDone");
    setTimeout(() => {
        document.documentElement.scrollTop = 0;
    }, 600);
    setTimeout(() => {
        flight.classList.remove("takeOfDone");
    }, 1000);

};

let nav = document.getElementById("nav"),
    hello = document.getElementById("title"),
    sidebar = document.getElementById("sidebar");

sidebar.onmouseenter = () => {
    sidebar.style.left = "0px";
}
sidebar.onmouseleave = () => {
    sidebar.style.left = "-120px";
}


const scrollVal = window.onscroll = () => {
    let n = window.scrollY;

    if (n > 160) {
        nav.classList.add("sticky");
    } else if (n < 70) {
        setTimeout(() => { nav.classList.remove("sticky"); }, 500);
    } else if (n > 50) {
        hello.classList.add("opacity");
        sidebar.style.left = "-120px";
    }

    if (n < 45) {
        hello.classList.remove("opacity");
        sidebar.style.left = "-125px";
    } else if( n == 0 || n <= 30 && location.reload){
        hello.classList.remove("opacity");
        sidebar.style.left = "-125px";
    }
    reloadMethod(n);
}




// const value = location.reload ? true : false;


function reloadMethod(e) {
    console.log(e);
    if (e >= 300 && location.reload) {
        hello.classList.add("opacity");
        sidebar.style.left = "-120px";
    }

}