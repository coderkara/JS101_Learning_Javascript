

// username and password stored in  database  while registering  
let database_user = "abc@gmail.com" ;
let database_password = "123abc" ;

// for  login 
let  user = "abc@gmail.com" ;
let password = "123abc" ;

if(database_user == user) {

  if(database_password == password) {

    console.log("login successfull");
    
  } else {
    
    console.log ("incorrect password");
    
  }
} else {

  console.log("wrong credentials");

} 