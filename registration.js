const form=document.querySelector('#form');
const namee=document.querySelector('#namee');
const degree=document.querySelector('#degree');
const depart=document.querySelector('#depart');
const shift=document.querySelector('#shift');
const aadhaar=document.querySelector('#aadhaar');
const acno=document.querySelector('#acno');
const ifsc=document.querySelector('#ifsc');
const acno1=document.querySelector('#acno1');
const ifsc1=document.querySelector('#ifsc1');
const whtno=document.querySelector('#whtno');
const dis=document.querySelector('#dis');
const sig=document.querySelector('#sig');

form.addEventListener('submit',(e) =>{

if(!validateInputs()){
    e.preventDefault();
}
});
function seterror(element,message){
    const inputcontrol=element.parentElement;
    const errordisplay=inputcontrol.querySelector('.error');
    errordisplay.innerText=message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
   
}
 function setsuccess(element){
    const inputcontrol=element.parentElement;
    const errordisplay=inputcontrol.querySelector('.error');
    errordisplay.innerText='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}
function validateInputs(){
    const namevalue=namee.value.trim();
    const degreevalue=degree.value.trim();
    const departvalue=depart.value.trim();
    const shiftvalue=shift.value.trim();
    const aadharvalue=aadhaar.value.trim();
    const acnovalue=acno.value.trim();
    const ifscvalue=ifsc.value.trim();
    const acno1value=acno1.value.trim();
    const ifsc1value=ifsc1.value.trim();
    const whtnovalue=whtno.value.trim();
    const disvalue=dis.value.trim();
    const sigvalue=sig.value.trim();
    let success=true;
    if(namevalue===''){
        seterror(namee,'name is required *');
        success=false;
    }
    else{
        setsuccess(namee);
    }
    if(degreevalue===''){
        seterror(degree,'degree is required *');
        success=false;
    }
    else{
        setsuccess(degree);
    }
    if(departvalue===''){
        seterror(depart,'degree is required *');
        success=false;
    }
    else{
        setsuccess(depart);
    }
    if(shiftvalue===''){
        seterror(shift,'shift is required *');
        success=false;
    }
    else{
        setsuccess(shift);
    }
    if(aadharvalue===''){
        seterror(aadhaar,'aadhaar No is required *');
        success=false;
    }
    else{
        setsuccess(aadhaar);
    }
    if(acnovalue===''){
        seterror(acno,'acno is required *');
        success=false;
    }
    else{
        setsuccess(acno);
    }
    if(ifscvalue===''){
        seterror(ifsc,'ifsc is required *');
        success=false;
    }
    else{
        setsuccess(ifsc);
    }
    if(acno1value===''){
        seterror(acno1,'acno is required *');
        success=false;
    }
    else{
        setsuccess(acno1);
    }
    if(ifsc1value===''){
        seterror(ifsc1,'ifsc is required *');
        success=false;
    }
    else{
        setsuccess(ifsc1);
    }
    if(whtnovalue===''){
        seterror(whtno,'whatsappNo is required *');
        success=false;
    }
    else{
        setsuccess(whtno);
    }
    if(disvalue===''){
        seterror(dis,'distance is required *');
        success=false;
    }
    else{
        setsuccess(dis);
    }
    if(sigvalue===''){
        seterror(sig,'signature is required*');
        success=false;
    }
    else{
        setsuccess(sig);
    }
    
    return success;
}
