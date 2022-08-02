const nameCheck=document.getElementById("name-check");
const phoneCheck=document.getElementById("phoneNo-check");
const emailCheck=document.getElementById("email-check");
const errorMessage1=document.getElementById("error-message1");
const errorMessage2=document.getElementById("error-message2");
const errorMessage3=document.getElementById("error-message3");


function validate(){
    const clientName=document.getElementById("client-name").value;
    if(clientName.length==0){
        nameCheck.innerHTML="name is required";
        errorMessage1.remove();
        return false;
    }
    if(!clientName.match(/^([a-zA-Z]*)[\s]([a-zA-Z]*)$/)){
        nameCheck.innerHTML="invalid";
        errorMessage1.innerHTML="input should only contain letters";
        return false;
        
    }else{
        nameCheck.innerHTML="<i class='fas fa-check-circle'></i>";
        return true;
    }
};

function validatePhoneNo(){
    const clientPhoneNo=document.getElementById("client-phoneNo").value;
    if(clientPhoneNo.length==0){
        phoneCheck.innerHTML="phoneNo is required";
        errorMessage2.remove();
        return false;
    }
    if(!clientPhoneNo.match(/^[0-9]{11}$/)){
        phoneCheck.innerHTML="invalid";
        errorMessage2.innerHTML="input should contain only numbers of 11 characters"
    }else{
        phoneCheck.innerHTML="<i class='fas fa-check-circle'></i>";
        return true;
    }
}

function validateEmail(){
    const clientEmail=document.getElementById("client-email").value;
    if(clientEmail.length==0){
        emailCheck.innerHTML="email is required";
        errorMessage3.remove();
        return false;
    }
    if(!clientEmail.match(/^([\w\.\-]+)[@]([a-z]{5})[\.]([a-z]{3})$/)){
        emailCheck.innerHTML="invalid";
        errorMessage3.innerHTML="input should match this text123.-_@gmail.com";
        return false;
    }else{
        emailCheck.innerHTML="<i class='fas fa-check-circle'></i>";
        return true;
    }
}


function validateSubmit(){
    if(!validate() || !validatePhoneNo() || !validateEmail()){
        return false;
    }else{
        return true;
    }
    
}
