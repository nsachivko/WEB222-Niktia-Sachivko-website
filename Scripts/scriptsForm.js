
function formChecker() {   
    var form = document.forms.theForm;
    var invalid_name = document.getElementById("full-name");



    form.fullname.onclick = function(){
        form.fullname.style.color = "#747474";
            form.fullname.setAttribute('placeholder', 'First and last name, no digits');
            invalid_name.style.borderColor = "#FFE400";
    }
    form.email.onclick = function(){
        form.email.style.color = "#747474";
            form.email.setAttribute('placeholder', 'Email Address (example@example.ca)');
            invalid_email.style.borderColor = "#FFE400";
    }
    form.address.onclick = function(){
        form.address.style.color = "#747474";
        form.address.setAttribute('placeholder', 'Address, should start with digit');
        invalid_address.style.borderColor = "#FFE400";
    }
    form.city.onclick = function(){
        form.city.style.color = "#747474";
        form.city.setAttribute('placeholder', 'City');
        invalid_city.style.borderColor = "#FFE400";
    }
    form.postalcode.onclick = function(){
        form.postalcode.style.color = "#747474";
        form.postalcode.setAttribute('placeholder', 'Postal Code (only Canadian)');
        invalid_postal.style.borderColor = "#FFE400";
    }
    form.hourlyrate.onclick = function(){
        form.hourlyrate.style.color = "#747474";
        form.hourlyrate.setAttribute('placeholder', 'Enter payment/hour');
        invaid_hiring_box.style.borderColor = "#FFE400";
    }

    // name section
    //fname = fname.charAt(0).toUpperCase() + fname.slice(1);
    var name_valid = false;

    var regex_name = /\d/;
    var name = form.fullname.value;
    var fullname = name.split(' ');
    if (regex_name.test(name) || name == "" || fullname.length != 2) {
        name_valid = false;
        invalid_name.style.borderColor = "#FF652F";
        form.fullname.value = "";
        form.fullname.setAttribute('placeholder', 'Wrong name');
    } else {
        invalid_name.style.borderColor = "#FFE400";
        name_valid = true;
    }



    // email section
    var invalid_email = document.getElementById("email_");
    var email_valid = false;
    var regex_email = /^[\w-\.]+@[\w-]+\.[a-z][A-Z]{1,4}$/i;
    var email = form.email.value;

    if (!regex_email.test(email)) {
        invalid_email.style.borderColor = "#FF652F";
        email_valid = false;
        form.email.value = "";
        form.email.setAttribute('placeholder', 'Wrong email format');
    } else {
        invalid_email.style.borderColor = "#FFE400";
        email_valid = true;
    }


    // address section
    var invalid_address = document.getElementById("address_");
    var address_valid = false;


    var address = form.address.value;
    var address_check = Number(address[0]);
    if (address == "" || isNaN(address_check)) {
        invalid_address.style.borderColor = "#FF652F";
        address_valid = false;
        form.address.value = "";
        form.address.setAttribute('placeholder', 'Wrong address');
    } else {
        invalid_address.style.borderColor = "#FFE400";
        address_valid = true;
    }

    //city section
    var invalid_city = document.getElementById("city_");
    var city_valid = false;
    var city = form.city.value;

    if (city == "") {
        invalid_city.style.borderColor = "#FF652F";
        city_valid = false;
        form.city.value = "";
        form.city.setAttribute('placeholder', 'Should not be empty');
    } else {
        invalid_city.style.borderColor = "#FFE400";
        city_valid = true;
    }



    // postal code section
    var invalid_postal = document.getElementById("postal_");
    var postal_valid = false;
    var postal_code = form.postalcode.value;

    var canadian_postal = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    if (canadian_postal.test(postal_code)) {
        invalid_postal.style.borderColor = "#FFE400";
        postal_valid = true;
    } else {
        invalid_postal.style.borderColor = "#FF652F";
        postal_valid = false;
        form.postalcode.value = "";
        form.postalcode.setAttribute('placeholder', 'Wrong postal code, should be Canadian');
    }

    // radio button section
    var option_button = form.radioType.value;   
    var payment_check = Number(form.hourlyrate.value);
    var hiring_valid = true;
    if (option_button == "hiring"){ 
        var invaid_hiring_box = document.getElementById("hiringbox");

        if (form.hourlyrate.value == "" || isNaN(payment_check)){
            invaid_hiring_box.style.borderColor = "#FF652F";
            hiring_valid = false;
            form.hourlyrate.value = "";
            form.hourlyrate.setAttribute('placeholder', 'Only number, not empty');
        } else{
            invaid_hiring_box.style.borderColor = "#FFE400";
            hiring_valid = true;
        }
    } 

    //checkbox section
    var rules_true = false;
    var checkbox = document.getElementById("rules_");
    if (checkbox.checked){
        rules_true = true;
    } else{
        rules_true = false;
    }

    // button section
    if (name_valid == true && email_valid == true && address_valid == true && city_valid == true && postal_valid == true && hiring_valid == true) {
        if (rules_true == true){
        document.getElementById("show-button").style.display = "inline-block";
        return true;
        } else{
            alert("You need to accept the agreement to send your data !");
            return false;
        }
    } else {
        return false;
    }

}

function addTextAreaQuestion() {
    document.getElementById("questionarea").style.display = "inline-block";
    document.getElementById("hiringoption").style.display = "none";
    document.getElementById("commentarea").style.display = "none";
}

function addTextAreaComment() {
    document.getElementById("commentarea").style.display = "inline-block";
    document.getElementById("hiringoption").style.display = "none";
    document.getElementById("questionarea").style.display = "none";
}

function hiring() {
    document.getElementById("questionarea").style.display = "none";
    document.getElementById("commentarea").style.display = "none";
    document.getElementById("hiringoption").style.display = "inline-block";
}

