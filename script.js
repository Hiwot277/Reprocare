function change(){
  
  function popup(){
     document.querySelector("#form-section").style.display = "none";
 document.querySelector("#pop-up").style.display = "block";
  
  
  document.querySelector("body").style.backgroundRepeat = "no-repeat";
  document.querySelector("body").style.backgroundSize = "cover";
  
  var x = document.querySelector(".username").value;
   document.querySelector("#pop-up").innerHTML = " you're have succesfully logged in!";
   
  }
  var x = document.querySelector(".username").value;
          var y = document.querySelector(".password").value;
           

          if(x=="" || x=="undefined" || y=="" || y=="undefined"){
              alert("You forgot to enter your Username & password.");  
          }
          else{
           popup();
		   window.location.assign("fofi.html");
     }
        
}