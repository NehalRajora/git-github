

/*function User(name){
    this.name = name;
}
let user = new User("john");
alert(user.name);*/

// 
/*function SmallUser(){
    this.name = "john";
    return {name : "abc" };
}
alert(new SmallUser().name); */

 // Methods in constructor
 /*function user(name) {
    this.name = name;

    this.sayHi = function(){
        alert("My name is : " + this.name);
    };
}
 let admin = new user("john");
 admin.sayHi();*/


 // symbol
 /*let id = Symbol("id");
alert(id.toString());

let user = {
   addreas :{
    street : {
        name : "asd"
    }
   }
};*/
// get input number from user and print the month value ex: if user write 1 then show alret message like you selected january month

/*let a = prompt("Enter the number:");
if(a == 1){
 alert("you selected january month");
}
else if (a == 2){
    alert("you selected feb month");
}
else if (a == 3){
    alert("you selected march month");
}
else if (a == 4){
    alert("you selected april month");
}
else if (a == 5){
    alert("you selected may month");
}
else if (a == 6){
    alert("you selected june month");
}
else if (a == 7){
    alert("you selected july month");
}
else if (a == 8){
    alert("you selected august month");
}
else if (a == 9){
    alert("you selected sep month");
}
else if (a == 10){
    alert("you selected oct month");
}
else if (a == 11){
    alert("you selected nov month");
}
else if (a == 12){
    alert("you selected dec month");
    let b = prompt("how many leave you want");
    if(b < 5 ){
        alert("your leave is approve");
     }
     else{
         alert("your leave is rejected");
     }
}
else{
    alert("please selected correct month");
}*/


/*let user = {
    address :{
     street : {
         name : "asd"
     }
    }
 };
 
//user.address ? user.address.street ? user.address.street.name : null : null

if(user.address) {
    if(user.address?.street){
       console.log(user.address?.street.name);
    } else {
        console.log(null);
    }
} else {
    console.log(null);
}*/

//
let user = {
    address :{
     street : {
         name : "asd"
     }
    }
 };
delete user?.address; 
if(user.address) {
    if(user.address?.street){
       console.log(user.address?.street.name);
    } else {
        console.log(null);
    }
} else {
    console.log(null);
}


// Optional chaining ?.
/*let y = 0;
let users = {
  name : 'abc', 
 
  sayHi(){
    alert(users.name);
}
};
users?.sayHi(y++);
alert(y); */

//
/*let key = "firstName";

let user1 = {
  firstName: "abc"
};

let user2 = null;

alert( user1?.[key] ); 
alert( user2?.[key] );*/

// 
// let user = {
//     address :{
//      street : {
//          name : "john"
//      }
//     }
// };
// if(user.address){
//     if(user.address?.stress){
//         console.log(user.address?.stress.name);
//      }else{
//         console.log(null);
//      }
// } else{
//     console.log(null);
// }
alert( 123456..toString(36) );