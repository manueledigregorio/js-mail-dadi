const button = document.getElementById('button');


button.addEventListener('click' , function(){

  const utente = Math.floor(Math.random() * 6) + 1 ;
  
  const computer = Math.floor(Math.random() * 6) + 1 ;
  console.log(computer);
  let messaggio ;
  if(utente > computer){
     messaggio = "ha vinto l'utente con il numero: " + utente ; 
  
  }else if(utente < computer){

    messaggio = "ha vinto il computer con il numero: " + computer;
  }else{
    
    messaggio = "avete pareggiato con il numero: " + utente;


  }
  document.getElementById("messaggio").innerHTML = messaggio;


});



  
