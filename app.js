

// function login(){
//     var username=document.getElementById(username).value;
//     var pass=document.getElementById(password);
//     if(username==="admin".toLocaleLowerCase() && password===123456){
//         swal("Good job!", "You clicked the button!", "success");
//         window.location.href="form.html"
//     }else{
//         swal("Oops", "Invalid username or password");
//     }
// }

function submit(){
    var country= document.getElementById("Country")
    var city= document.getElementById("City")
    var course= document.getElementById("course")
    var proficiency= document.getElementById("proficiency")
    var fullname= document.getElementById("fullname")
    var Fathername= document.getElementById("Fathername")
    var email= document.getElementById("email")
    var phone= document.getElementById("phone")
    var CNIC= document.getElementById("CNIC")
    var fathercnic= document.getElementById("fathercnic")
    var dob= document.getElementById("dob")
    var gender= document.getElementById("Gender")
    var add= document.getElementById("Address")
    var Qualification= document.getElementById("Qualification")
    var Laptop= document.getElementById("Laptop")


    console.log(`Country ${country.value}`)
    console.log(`City ${city.value}`)
    console.log(`Course ${course.value}`)
    console.log(`Computer Proficiency ${proficiency.value}`)
    console.log(`Full Name ${fullname.value}`)
    console.log(`Father's Name ${Fathername.value}`)
    console.log(`Email ${email.value}`)
    console.log(`Phone ${phone.value}`)
    console.log(`CNIC ${CNIC.value}`)
    console.log(`father's CNIC ${fathercnic.value}`)
    console.log(`Date of Birth ${dob.value}`)
    console.log(`Gender ${gender.value}`)
    console.log(`Address ${add.value}`)
    console.log(`Qualification${Qualification.value}`)
    console.log(`Do you have laptop?${Laptop.value}`)
}

// function button(){
//     // var first=document.getElementById("fname")
//     // var father=document.getElementById("father")
//     var qua=document.getElementById("sa")

//     // console.log(`name ${first.value}`)
//     // console.log(`father name ${father.value}`)
//     console.log(`Qualification ${qua.value}`)
// }
