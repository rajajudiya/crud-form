let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let inputAddress2 = document.getElementById('inputAddress2');
let city = document.getElementById('city');
let state = document.getElementById('state');
let tbody = document.getElementById('View')

let adds = [];

let addData = () =>{
    console.log("Add");

    let obj = {
        id: Math.floor(Math.random() * 10000),
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


    dataDisplay();
    fname.value = '';
    lname.value = '';
    email.value = '';
    password.value = '';
    inputAddress2.value = '';
    return false;

}

const dataDisplay = () => {
    tbody.innerHTML = '';

    adds.forEach(rec => {
        tbody.innerHTML += `<tr>
            <td>${rec.id}</td>
            <td>${rec.fname}</td>
            <td>${rec.lname}</td>
            <td>${rec.email}</td>
            <td>${rec.password}</td>
            <td>${rec.inputAddress2}</td>
        </tr>`
    });
};