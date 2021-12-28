function validate() {

    var firstname = document.personal_details.firstname;
    var lastname = document.personal_details.lastname;
    var email = document.personal_details.email;
    var Mobile_no = document.personal_details.Mobile_no;
    var Address = document.personal_details.Address;
    var Gender = document.personal_details.Gender;
    
    if(firstname.value.length <= 0){
        MessageChannel.push("First name is required");
        firstname.focus();
        return false;
    }
    if(lastname.value.length <= 0){
        alert("Last name is required");
        lasttname.focus();
        return false;
    }
    if(email.value.length <= 0){
        alert("Email is required");
        email.focus();
        return false;
    }
    if(Mobile_no.value.length <= 0){
        alert("Mobile-no. name is required");
        Mobile_no.focus();
        return false;
    }
    if(Address.value.length <= 0){
        alert("Address is required");
        Address.focus();
        return false;
    }
    if(Gender.value.length <= 0){
        alert("Gender is required");
        Gender();
        return false;
    }
    return false;
}
function validateString(id){
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if(!regExp.test(element.value)){
        alert("Enter string value.");
        element.style.border = "2px solid red";
       // element.focus();
        return false;
    }
    element.style.border = "2px solid green";


}

function validateEmail(id){
    var element = document.getElementById(id);
    var regExp = /^[0-9a-zA-Z._]+@[0-9a-zA-Z._]+\.[a-zA-Z]{2,4}$/;
    if(!regExp.test(element.value)){
        alert("Enter valid email.");
        element.style.border = "2px solid red";
       // element.focus();
        return false;
    }
    element.style.border = "2px solid green";

}
    
function validateNumber(id){
    var element = document.getElementById(id);
    var regExp = /^[0-9]{10}$/;
    if(!regExp.test(element.value)){
        alert("Enter number value. And it should be 10 digit.");
        element.style.border = "2px solid red";
       // element.focus();
        return false;
    }
    element.style.border = "2px solid green";

}
function submitFunction(id){
    var element = document.getElementById(id)
    if(firstname=="" || lastname=="" || email=="" || Mobile_no=="" || Address=="" || Gender==""){
        window.location.href="file:///C:/Users/piyush/Desktop/JS-Assign/Assign-4%20js%20form/welcome/welcome.html";

    }
    else{
        alert("Invalid Information" );
    }
    return false;
}