let slider = document.querySelector('#length-bar');
let sliderVal = document.querySelector('#length-val');
let passwordDis = document.querySelector('#passwordS');
let checkBoxSpl  = document.querySelector('#char');
let checkBoxNo = document.querySelector('#number-box');
let copyBtn = document.querySelector('#copy-btn');

function length(val){
  sliderVal.innerText = val.value;
    return val.value;
};

function generatePassword(){
   let pass = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   let checkBoxStateNo = checkBoxNo.checked;

   let checkBoxStatespl = checkBoxSpl.checked;

   if(checkBoxStateNo) characters += '0123456789';

   if(checkBoxStatespl) characters += '@"!£$%^&*()?/.,';
  
   
    for(let i=0;i < slider.value; i++){
      let char = Math.floor(Math.random()*characters.length);
      pass  += characters[char];
   }

passwordDis.value = pass;
};

function copying(){
 passwordDis.select();
 passwordDis.setSelectionRange(0,9999);
 document.execCommand('copy');
 alert('Copied 👌');
 window.getSelection().removeAllRanges();
}

slider.addEventListener('input',()=>{
    length(slider);
    generatePassword();
})

copyBtn.addEventListener('click',()=>{
  copying();
})
generatePassword();