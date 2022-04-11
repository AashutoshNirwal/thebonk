function validate(){
    let x =document.getElementById('u');
    let y=document.getElementById('p');
     if(x.value==""){
        document.getElementById('uimg').style.visibility="visible";
        document.getElementById('rmv').style.visibility="visible";
        return false;
     }
     if(y.value==""){
         document.getElementById('pimg').style.visibility="visible";
         document.getElementById('rmv').style.visibility="visible";
         return false;
     }
     return true;
}