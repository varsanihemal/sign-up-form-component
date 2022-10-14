const infoInput = document.querySelectorAll('.input-info');
const btn = document.getElementsByClassName('confirm')[0];
const form = document.getElementById('form');
// console.log(infoInput)
const formValidation = ()=>{
    
    const Fname = document.getElementById('Fname');
    const Lname = document.getElementById('Lname');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');

    /*
    console.log(Fname);
    console.log(Lname);
    console.log(email);
    console.log(password);
    */
   //Use of trim to remove extra white spaces or blanks
   const firstName = Fname.value.trim();
   const lastName = Lname.value.trim();
   const email = inputEmail.value.trim();
   const password = inputPassword.value.trim();
   
   const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   if(firstName === "" || firstName === null){
    infoInput[0].classList.add("error");
   } else {
    infoInput[0].classList.remove("error");
   }

   if(lastName === "" || lastName === null){
    infoInput[1].classList.add("error");
   } else {
    infoInput[1].classList.remove("error")
   }

   if(email.match(regEx)){
    infoInput[2].classList.remove("error");
   } else {
    infoInput[2].classList.add("error");
   }

   if(password === "" || password === null) {
    infoInput[3].classList.add("error");
   } else {
    infoInput[3].classList.remove("error");
   }
   
};


btn.addEventListener('click', (e)=>{
    e.preventDefault();
    formValidation();
});

// END :)