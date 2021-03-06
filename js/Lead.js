var customerData = getCustomerObjectArray(JSON.parse(localStorage.getItem("customerData")));
var leadData = getLeadObjectArray(JSON.parse(localStorage.getItem("leadDate")));

function btnSubscribeNwl(){
    var fields = document.getElementsByClassName("requiredField");
    if(areAllFieldsFilledOut(fields) && isEmailValid(fields[2]) && isEmailAlreadyExisting(leadData, fields[2]) && isEmailAlreadyExisting(customerData, fields[2])){
        leadData.push(new Lead(fields[0].value, fields[1].value, fields[2].value, new Date()));
        localStorage.setItem("leadDate", JSON.stringify(leadData));
        fields[0].value = ""; fields[1].value = ""; fields[2].value = "";
        document.getElementById("nwlSuccessMessage").innerHTML = "Thanks for subscribing. See you soon!";
    }
}