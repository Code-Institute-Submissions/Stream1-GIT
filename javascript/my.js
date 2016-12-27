function validaemail(mail){
 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(idf.email.value))  
  {  
    alert("valid email"); 
  	idf.submit();
    return (true)  
  }  
    alert( $fullname + "You have entered an invalid email address!")  
    return (false)  
}  
	
function go(){
   document.location = "https://www.amazon.co.uk/s/ref=nb_sb_ss_c_1_7?url=search-alias%3Ddigital-music&field-keywords=" + document.getElementById("t1").value;
}
