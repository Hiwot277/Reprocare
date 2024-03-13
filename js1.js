   
function send(form){
var z=form.email.value;
var x=form.username.value;
var y=form.password.value;
var c=form.password2.value;
var b=form.age.value;

          if(x=="" || x=="undefined" || y=="" || y=="undefined"){
              alert("OOOPS!!..you forgot to enter your Username & password.");  
          }

else  if(z==""||z.indexOf('@', 0) == -1){
alert("No email written");}

else  if(y!=c){
alert("you did not confim your password corectly");}

          else if(b=="" || b=<0){
              alert("Enter age!!");  
          }

          else{
           popup();
		   window.location.assign("fofi.html");
     }

}