
const mail = ['marco12@gmail.com', 'giuseppe@gmail.com', 'manuel@gmail.com'];

const ricercaMail = (prompt('inserisci mail'));
let messaggio;
let controllo = false;
for(let i=0; i<mail.length; i++){

  if( mail[i] === ricercaMail){
    controllo = true;
    
   
  }

   
}

if(controllo){
  messaggio= "mail registrata"

}else{
  messaggio = "mail non registrata"
}



document.getElementById("dati").innerHTML = messaggio;
