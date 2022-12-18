var translate=document.querySelector("#click");

var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

serverurl="		https://api.funtranslations.com/translate/braille.json";


function getTranslationurl(text){
    return serverurl + "?" +"text=" + text
 }

 function errorhandler(error){
    console.log("Error: " + error);
    alert("somethin went wrong  ");
 }

 function clickHandler(){
    var inputtxt=txtinput.value;

fetch(getTranslationurl(inputtxt))
.then(response =>response.json())
.then(json => {
    var translatedtext =json.contents.translated;
    outputdiv.innerText = translatedtext;
})

 }


translate.addEventListener("click",clickHandler);
