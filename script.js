let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let inputAddress2 = document.getElementById('inputAddress2');
let city = document.getElementById('city');
let state = document.getElementById('state');
let tbody = document.getElementById('View');

let isEdit = false;
let isIndex;

const getdata = () => {
    let data=JSON.parse(localStorage.getItem("form"));

    if (data) {
        return data;
    } else {
      return []; 
    }
}

let adds = getdata();

// create data
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

    };


    if (isEdit){
        let data =[...adds];

        updatedRec = data.map((rec) => {

            if (rec.id = isIndex) {
                console.log("oldRecord",rec);

                return rec=obj
            } else {
                return rec
            }
        });

        console.log("update",updatedRec);
        adds = updatedRec;
        isEdit = false;
        isIndex = undefined;
    }else
    {
        console.log("random");
        adds.push(obj);
    
        console.log("obj" , obj);
        console.log("adds",adds);
    }




    dataDisplay();

    localStorage.setItem("form",JSON.stringify(adds));
    fname.value = '';
    lname.value = '';
    email.value = '';
    password.value = '';
    inputAddress2.value = '';

    return false;

};

// edit

const singleRec = (id) => {

    console.log("id" , id);



    let data =  [...adds];
    

    let singleRec = data.filter((d) => {
        return d.id == id;
      });
      console.log("Edit ID", singleRec[0]);
    
      fname.value = singleRec[0].fname;
      lname.value = singleRec[0].lname;
      email.value = singleRec[0].email;
      password.value = singleRec[0].password;
      inputAddress2.value = singleRec[0].inputAddress2;
      localStorage.setItem("form", JSON.stringify(data));
      isEdit = true;
      isIndex = id;
};

// DeleteFunction
const deleteRec = (id) => {
    let data = [...adds]

    let deleteData = data.filter((delId) =>{
        return delId.id != id 
    })

    localStorage.setItem("form", JSON.stringify(deleteData));
    adds = getdata();
    dataDisplay();
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
            <td>${rec.city}</td>
            <td>${rec.state}</td>

            <td>
            <button type="button" class="btn btn-primary" onclick = "return  singleRec(${rec.id})">Edit</button> <button type="button" class="btn btn-danger" onclick = "return  deleteRec(${rec.id})">Delete</button>
            </td>
        </tr>`
    });
};

dataDisplay();