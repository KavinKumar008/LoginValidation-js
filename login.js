const form=document.getElementById('form');
const uname=document.getElementById('username')
const pwd=document.getElementById('password');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateFunction();
})

function validateFunction(){
    // alert('hooooo')
    if(uname.value == ''){
        setError(uname,'enter username');
    }
    else{
        setSuccess(uname);
    }
    if(pwd.value.length<8){
        setError(pwd,'enter valid password')
    }
    else{
        setSuccess(pwd)
    }
}

function setError(element,message){
 const parent= element.parentElement;
  const child= parent.querySelector('.error');
  child.innerText=message;
  parent.classList.add('error');
}

function setSuccess(element){
    const parent= element.parentElement;
  const child= parent.querySelector('.error');
  child.innerText='';
  parent.classList.remove('error');
}