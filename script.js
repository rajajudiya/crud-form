let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let inputAddress2 = document.getElementById('inputAddress2');
let city = document.getElementById('city');
let state = document.getElementById('state');

let adds = [];

let addData = () =>{
    console.log("Add");

    let obj = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
        inputAddress2: inputAddress2.value,
        city: city.value,
        state: state.value,

    }
    adds.push(obj);

    console.log("obj" , obj);
    console.log("adds",adds);

    return false;

}