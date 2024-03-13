   
function send(form){
var z=form.email.value;
var x=form.username.value;
var y=form.password.value;
var c=form.password2.value;
var b=form.age.value;

          if(x=="" || x=="undefined"){
              alert("You forgot to enter your Username");  
          }
        else if( y=="" || y=="undefined"){
              alert("You forgot to enter your password.");  
          }

else  if(z==""||z.indexOf('@', 0) == -1){
alert("Enter your correct email ");}

else  if(y!=c){
alert("you did not confim your password corectly");}

          else if(b=="" || b<=0){
              alert("Enter the correct age!!");  
          }

else{
alert("YOU HAVE SUCCESFULLY SIGNED-IN!!");
window.location.assign("fofi.html");
}
}