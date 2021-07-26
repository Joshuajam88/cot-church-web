// let name = ''
// let form = ''
// let Email = ''
// let number = ''

// function validationForm(){
//     var Name = document.getElementById('Names').value;
//     var form = document.getElementById('form').value;
//     var Email = document.getElementById('Email').value;
//     var number = document.getElementById('number').value;
// }

// function printError(elemeId, hintMsg){
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

// function validationForm(){
//     var Name = document.myForm.Name.value;
//     var form = document.myForm.form.value;
//     var email = document.myForm.email.value;
//     var number = document.myForm.number.value;
// }
// // validating of name
// var nameErr = formErr = emailErr = numberErr = true;

// if(Name == ''){
//     printError('nameErr', 'Please enter you name');
// }else{
//     var regex = /^[a-zA-Z\s]+$/;
//     if(regex.test(Name) === false){
//         printError('nameErr', 'Please enter a valid name');
//     }else{
//         printError('nameErr', "");
//         nameErr = false;
//     }
// }

// // validating of email address
// if(email == ""){
//     printError("emailErr", "Please enter your email")
// }else{
//     var regex = /^\S+@\S+\.\S+$/;
//     if(regex.text(email) === false){
//         printError("emailErr", "Please enter a valid email address")
//     }else{
//         printError("emailErr", "")
//         emailErr = false;
//     }
// }

// // validating mobile number
// if(number == "")
// printError("")


// fetch('https://restcountries.eu/rest/v2/all')
// .then(function(res){
//     // console.log(res);
//     return res.json();
// })
// .then(function(data){
//     // console.log(data);
//     initialize(data);
// })
// .catch(function(err){
//     console.log('Error: ' + err)
// });


// Global variables
let countries; //will contain "fetched" Data


fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log('Error: ' + err));

function initialize(countriesData){
    countries = countriesData;
    let options = `<option value="nigeria">Nigeria</option>`;
    for(let i=0; i<countries.length; i++){
        options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
    }
    document.getElementById('countries').innerHTML = options;
}





// <!-- place below the html form -->
  function payWithPaystack(){
    var handler = PaystackPop.setup({
      key: 'paste your key here',
      email: 'joshuadrum089@gmail.com',
      amount: 10000,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }





  
 
  



// const xhttp = new XMLHttpRequest();
// const select = document.getElementById("countries")

// let countries;

// xhttp.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         countries = JSON.parse(xhttp.responseText);
//         assignValues();
//         handleCountryChange();
//     }
// }
// xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
// xhttp.send()

// function assignValues(){
//     countries.forEach(country => {
//         const option = document.createElement("option");
//         option.value = country.alpha2Code;
//         option.textContent = country.name;
//         select.appendChild(option);
//     })
// }
