document.querySelector(".clik").addEventListener("click",function(){
    document.querySelector(".form-submitted-success").classList.remove("go-up");
    document.querySelector(".form-submitted-success").classList.remove("smooth");
    document.querySelector(".form-submitted-success").classList.add("go-up");
});

document.querySelector(".cli").addEventListener("click",function(){
    document.querySelector(".form-submitted-unsuccess").classList.remove("go-up");
    document.querySelector(".form-submitted-unsuccess").classList.remove("smooth");
    document.querySelector(".form-submitted-unsuccess").classList.add("go-up");
});

document.getElementsByTagName("form")[0].addEventListener("submit", function(event){
    event.preventDefault();
    let _form = document.getElementsByTagName("form")[0];
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let numb = document.getElementById("num").value;
    let sub = document.getElementById("sub").value;
    let msg = document.getElementById("msgbox").value;
    if(name.length <= 0 || mail.length <= 0 ||numb.length <= 0 ||sub.length <= 0 ||msg.length <= 0)
    {
        document.querySelector(".form-submitted-unsuccess").classList.add("smooth");
    }else{
        document.querySelector(".form-submitted-success").classList.add("smooth");
    }
    _form.reset();
});