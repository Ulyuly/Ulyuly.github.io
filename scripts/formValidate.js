function validateForm() {
    event.preventDefault();
    let name = document.forms["myForm"]["name"].value;
    let surname = document.forms["myForm"]["surname"].value;
    let email = document.forms["myForm"]["email"].value;  //deklarowanie zmiennych
    let textarea = document.forms["myForm"]["textarea"].value;
    let checked = document.forms["myForm"]["agreement"].checked;
    let inputs = document.getElementsByClassName('formInput');
    let validatorErrorsText = "";
    let validatorErrors = 0;

    if (name.match(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+$/i) == null || name == "") {
      validatorErrors++
      validatorErrorsText += "imię, "
      inputs[0].style.borderColor = "red";
      inputs[0].style.color = "red"
    } else {
    inputs[0].style.borderColor = "lightgreen";
    }
    if (surname.match(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]*$/) == null || surname == ""){
        validatorErrors++
        validatorErrorsText += "nazwisko, "
        inputs[1].style.borderColor = "red";
        inputs[1].style.color = "red"
    } else {
        inputs[1].style.borderColor = "lightgreen";
    }
    if (email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) == null || email == ""){  //sprawdzanie zmiennych
        validatorErrors++
        validatorErrorsText += "email, "
        inputs[2].style.borderColor = "red";
        inputs[2].style.color = "red"
    } else {
        inputs[2].style.borderColor = "lightgreen";
    }
    if (textarea == ""){
        validatorErrors++
        validatorErrorsText += "treść, "
        inputs[3].style.borderColor = "red";
        inputs[3].style.color = "red"

    } else {
        inputs[3].style.borderColor = "lightgreen";
    }
    if (checked == 0){
        validatorErrors++
        validatorErrorsText += "zgodę, "
        inputs[4].style.borderColor = "red";
        inputs[4].style.color = "red"
    } else {
        inputs[4].style.borderColor = "lightgreen";
    }

    if(validatorErrors>0){  
        alert("Uzupełnij lub popraw: "+validatorErrorsText+"inaczej nie będziesz mógł wysłać formularza.")  //checking for the amount of errors
        return false;
    } else {
        submitFormAjax();
        let form = document.getElementById("formContact");
        for(i=0;i<inputs.length;i++){
            inputs[i].style.borderColor ="transparent";
        }
        form.reset();
    }
  }