function clearErrors() {
    formerrors = document.getElementsByClassName("form-error");
    for (let item of formerrors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    // set error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('form-error')[0].innerHTML = error;
}

function validateForm() {

    var returnval = true;
    clearErrors();

    //perform validation

    //fname
    var fname = document.forms['registerForm']['firstName'].value;
    if (fname.length > 10) {
        seterror("fname", "Fist name is too long");
        returnval = false;
    }

    if (fname.length == 0) {
        seterror("fname", "First name Field cannot be left blank");
        returnval = false;
    }

    //lname
    var lname = document.forms['registerForm']['lastName'].value;
    if (lname.length > 10) {
        seterror("lname", "Last Name is too long");
        returnval = false;
    }

    if (lname.length == 0) {
        seterror("lname", "Last name Field cannot be left blank");
        returnval = false;
    }

    //useremail
    var useremail = document.forms['registerForm']['emailId'].value;
    if (useremail.length > 30) {
        seterror("emailid", "Email is too long");
        returnval = false;
    }

    if (useremail.length == 0) {
        seterror("emailid", "Email Id Field cannot be left blank");
        returnval = false;
    }

    //userContact
    var phonenumber = document.forms['registerForm']['userContact'].value;
    if (phonenumber.length != 11) {
        seterror("contactnumber", "Phone number should be 11 digits");
        returnval = false;
    }

    alert(returnval);
    return event.preventDefault();

}
