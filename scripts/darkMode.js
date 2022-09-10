let darkModeOn = 0;
function darkMode() {
    const two = document.getElementsByClassName("secondPanel")[0];
    const three = document.getElementsByClassName("thirdPanel")[0];
    const four = document.getElementsByClassName("fourthPanel")[0];
    const twoHeader = document.getElementsByClassName("secondHeader")[0];
    const threeHeader = document.getElementsByClassName("thirdHeader")[0];
    const fourHeader = document.getElementsByClassName("fourthHeader")[0];
    const form = document.getElementsByClassName("form")[0];
    const formUpperText = document.getElementsByClassName("formUpperText");
    const formAgreement = document.getElementsByClassName("formAgreement")[0];

    if(darkModeOn==0){

    two.style.backgroundColor = "rgb(30,30,30)";
    three.style.backgroundColor = "rgb(40,40,40)";
    four.style.backgroundColor = "rgb(30,30,30)";
    form.style.backgroundColor = "rgb(40,40,40)";

    two.style.color = "white";
    three.style.color = "white";
    four.style.color = "white";
    formUpperText[0].style.color = "white";
    formUpperText[1].style.color = "rgb(210,230,230)"
    formAgreement.style.color = "white";

    twoHeader.style.color = "rgb(200,200,200)"
    threeHeader.style.color = "rgb(200,200,200)"
    fourHeader.style.color = "rgb(200,200,200)"
    darkModeOn++
    } else {

    two.style.backgroundColor = "white";
    three.style.backgroundColor = "rgb(243,243,243)";
    four.style.backgroundColor = "white";
    form.style.backgroundColor = "rgb(245,248,250)";

    two.style.color = "black";
    three.style.color = "black";
    four.style.color = "black";
    formUpperText[0].style.color = "rgb(100,100,100)";
    formUpperText[1].style.color = "rgb(123,148,165)";
    formAgreement.style.color = "black";

    twoHeader.style.color = "rgb(0,40,65)"
    threeHeader.style.color = "rgb(0,40,65)"
    fourHeader.style.color = "rgb(0,40,65)"
    darkModeOn--
    }
}