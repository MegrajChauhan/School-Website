function animate() {
    let _cont_list = document.querySelectorAll(".float-imgs");
    if (window.innerWidth == 1160) {
        return;
    }
    for (let i = 0; i < _cont_list.length; i++) {
        let _list = document.querySelector(".float-img-" + (i + 1));
        _list.classList.replace("original-posi", "new-posi-img");
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
        document.getElementsByTagName("header")[0].style.display = "none";
        document.querySelector(".logo").style.visibility = "hidden";
        document.querySelector(".menu_burger").style.display = "block";
    } else {
        document.getElementsByTagName("header")[0].style.display = "block";
        document.querySelector(".logo").style.visibility = "visible";
        document.querySelector(".menu_burger").style.display = "none";
    }
});

document.querySelector(".port").addEventListener("click", function () {
    if (window.innerWidth <= 600) {
        let p = document.querySelector(".port");
        let q = document.querySelector(".control");
        p.classList.add("rotate");
        if (q.classList.contains("opac")) {
            q.classList.remove("opac");
            q.classList.add("no-opac");
        }
        else {
            q.classList.add("opac");
            q.classList.remove("no-opac");
        }
        p.classList.remove("rotate");
    } else {
        return;
    }
});

function handle(Event) {
    let x = document.querySelector("form");
    window.alert("Form Submitted successfully!");
    x.reset();
}

window.onload = animate();
window.onload = window.scrollTo(0, 0);

function handleGalClick(cls_name) {
    let x = document.querySelector('.'+cls_name);
    if(cls_name == "teacher-pic")
    {
        document.querySelector(".prac-pic").classList.add("hide");
        document.querySelector(".school-pic").classList.add("hide");
        x.classList.contains("hide")? x.classList.remove("hide"): null;
    }else if(cls_name == "prac-pic")
    {
        document.querySelector(".teacher-pic").classList.add("hide");
        document.querySelector(".school-pic").classList.add("hide");
        x.classList.contains("hide")? x.classList.remove("hide"): null;
    }else{
        document.querySelector(".teacher-pic").classList.add("hide");
        document.querySelector(".prac-pic").classList.add("hide");
        x.classList.contains("hide")? x.classList.remove("hide"): null;
    } 
}