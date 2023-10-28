function validate(){
    let name=
    document.getElementById("name").value;

    let subject=
    document.getElementById("subject").value;

    let phone=
    document.getElementById("phone").value;

    let email=
    document.getElementById("email").value;

    let message=
    document.getElementById("message").value;

    let error_message=
    document.getElementById("error_message");

    error_message.style.padding="10px";

    let errors=[];

    if(name.length<5){
        errors.push("please enter the valid name");
    }

    if(subject.length<6){
        errors.push("please enter the correct subject");
    }
    if(isNaN(phone) ||phone.length !=10){
        errors.push("enter the vaild phone number");
    }

    if(email.indexOf("@")==-1 || email.length<6){
        errors.push("please enter the valid email");
    }

    if(errors.length>0){
        error_message.innerHTML=errors.join("<br>")
        return false;
    }
    else{
    alert("form Submitted Successfully!");
    return true;
    }



}