var translate=document.querySelector("#click");

var txtinput = document.querySelector("#txt-input");
console.log("txtinput");
click.addEventListener("click" , function clickHandler() {
    console.log("click");
    console.log("input",txtinput.value);
});


translate.addEventListener("click",clickHandler);
