const n = document.querySelector(".name");
const s = document.querySelector(".surname");
const e = document.querySelector(".email");
const sub = document.querySelector(".btn");

sub.addEventListener('click', function() {
    console.log("hehe");

    var myHeaders = new Headers();
    myHeaders.append("apikey", "idy5htn2NpBxgh5DGrcSHF4SOGwoAGhZ");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    if(e.value !== "") {
        fetch("https://api.apilayer.com/email_verification/check?email="+e.value, requestOptions)
    .then(response => response.text())
    .then(result => params = [JSON.parse(result).format_valid, JSON.parse(result).mx_found, JSON.parse(result).smtp_check])
    // .then(result => console.log(result.format_valid, result.mx_found))
    // .then(result => console.log(JSON.parse(result)))
    .then(() => {
        if(params[0] == true && params[1] == true) {
            alert("Email Valid");
        } else {
            alert("Email Fake")
        }
    })
    .catch(error => console.log('error', error));
    }else {
        alert("please enter an email");
    }
    
})







