//-------- JavaScript Object Declaration

/*const object_name = {
    key1: value1,
    key2: value2
 };*/
 //Here, an object object_name is defined. 
 //Each member of an object is a key: value pair separated by commas and enclosed in curly braces {}.

//------ JavaScript Object Properties
// In JavaScript, "key: value" pairs are called properties. For example,

/* let person = { 
    name: 'John',
    age: 20
};*/
// Here, name: 'John' and age: 20 are properties.

//-------- Accessing Object Properties
// You can access the value of a property by using its key.

// 1. Using dot Notation
// Here's the syntax of the dot notation.
//objectName.key

//dynamic key and dynamic value
/*let keyName = prompt("Enter keyname",'');
let person = {
   name : 'abc',
   age : 27
};
console.log(person[keyName]);
let dynamicKey = prompt("Enter dynamicKey name",'');
let dynamicKeyValue = prompt("Enter dynamicKey Value ",'');
person[dynamicKey] = dynamicKeyValue;
console.log(person[dynamicKey]);
console.log(person.age);*/


/*let keyName = prompt("Enter keyName", '');
let person = {
  name : 'abc',
  age : 26
};
console.log(person.age); //26
let dynamicKey = prompt("Enter the Keyname",'');
let dynamicValue = prompt("Enter the value name",'');
person[dynamicKey] = dynamicValue;// dynamic value change when user enter the value
person["firstname"] = 'hello'; // static value
console.log(person[dynamicKey]);
console.log(person["firstname"]);
//person["firstname"] che ae static declare karu che bcz ae variable nati bcz we declare a variable by let keyword*/

/*function makeUser(name,age){
    return{
        name : name,
        age: age,
    };
}
let user = makeUser('hello',30);
alert(user.name);
let newKey = "asd"// prompt("Enter the keyName",'');
let newValue = "asdasd"; prompt("Enter the valueName",'');
user[newKey] = newValue;
console.log(user[newKey]);
// let newKey che ae dynamic che bcx ae variable che. */

//Computed properties
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.

//For instance:
/*let fruit = prompt("which fruit you like","apple");
let bag ={
    [fruit] : 5,
};
alert( bag.apple );*/

// “in” operator synntax:-
// "key" in object
/*example:
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user );*/

// let userDataObj = {
//   name : 'abc',
//   department : 'computer',
//   address : 'abcc',
//   age : 23,
//   childData: {
//     childName : '1111',
//     childDepartment : '22222',
//     childAddress : '33333',
//     childAge : 444,
//   }
// };
// for(let valueData in userDataObj){
//     //console.log(valueData + ' : ' + userDataObj[valueData]);
//     //console.log(valueData + ' : ' + userDataObj[valueData].childage);
//     if (valueData === 'childData') {
//         for(let valueDataRef in userDataObj[valueData]) {
//             console.log(userDataObj[valueData][valueDataRef]);
//          }
//     }
// }


/*let userDataObj = {
    name : 'abc',
    department : 'computer',
    address : 'abcc',
    age : 23,
    child: {
        name : 'abc',     
        age : 44
    }
  };
  for(let valueData in userDataObj){
    //console.log(valueData); // Display the list of key
    if(valueData === 'child'){
        for(let valueDatas in userDataObj[valueData]){
            //console.log(userDataObj[valueData]); 
            if(valueDatas == 'age') {
                console.log(userDataObj[valueData][valueDatas]);
            }
        }
    }
  }*/

  ///
  /*let userDataObj = {
    name : 'abc',
    department : 'computer',
    address : 'abcc',
    age : 23,
    child: {
        name : 'child',     
        age : 44,
        otherchild: {
                name : 'otherchilds',     
                age : 44
            },
    }, 
  };
  for(let valuedata in userDataObj) {
        if(valuedata === 'child'){
            for(let otherValuedata in userDataObj[valuedata]) {
                    if(otherValuedata == 'otherchild'){
                        for(let secondValue in userDataObj[valuedata][otherValuedata]) {
                            //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
                            if(secondValue == 'age'){
                                console.log(userDataObj[valuedata][otherValuedata][secondValue]);
                                //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
                            }
                            //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
                        }
                    }
                    //console.log(otherValuedata);
                    
            }
        }
  }*/
    // if(valuedata === 'child'){
    //     for(let firstValue in userDataObj[valuedata]){
    //         //console.log(userDataObj[valuedata]);
    //         if(valuedata[firstValue] === 'otherchild'){
    //             console.log(valuedata[firstValue]);
    //             // for(let secondValue in userDataObj[valuedata][firstValue]){
    //             //     //console.log(userDataObj[valuedata][firstValue]);
    //             //     if(secondValue == 'name'){
    //             //         console.log(userDataObj[valuedata][firstValue][secondValue]);
    //             //     }
    //             // }
    //         }
    //     }
    // }


//---------- Display if age is greater then 44 then only display otherchild data 

    /*let userDataObj = {
        name : 'abc',
        department : 'computer',
        address : 'abcc',
        age : 23,
        child: {
            name : 'child',     
            age : 44,
            otherchild: {
                    name : 'otherchilds',     
                    age : 46
                },
        }, 
    };
    for(let valueData in userDataObj){
        if(valueData === 'child'){
            if (userDataObj.child.age > 44) {
                console.log(userDataObj.child.otherchild.age);
            }
            
        }
    }*/
    
    // Display if the age is greater then 10 then only go inside the child object and 
    //if age is greater then 24 then only display the secondchild object
    /*let userDataObj = {
        name : 'abc',
        department : 'computer',
        address : 'abcc',
        age : 12,
        child: {
            name : 'firstchild',
            department : 'IT',
            address : 'abcc',
            age : 24,
            child:{
                name : 'secondchild',
                department : 'CS',
                address : 'abcc',
                age : 34,
                child:{
                    name : 'thirdchild',
                    department : 'EC',
                    address : 'abcc',
                    age : 45,
                    child:{
                        name : 'fourthchild',
                        department : 'EC',
                        address : 'abcc',
                        age : 55,
                    }
                }
            }
        }
    };
// level 0 name = abc 
// .....
// level 1 name = abc 
//Display only the key and value of userDataObj not the nested object
for (let level0 in userDataObj) {
    if (typeof userDataObj[level0] !== 'object') {
        console.log(level0 + ': ' + userDataObj[level0]);
    }
}
///
for(let level0 in userDataObj){
    if (level0 === 'child'){
        if (userDataObj.child.age > 12) {
        console.log(userDataObj.child.age);
        // for (let level0 in userDataObj) {
        //     if (typeof userDataObj[level0] !== 'object') {
        //         console.log(level0 + ': ' + userDataObj[level0]);
        //     }
        // } 
        console.log(userDataObj.child.name);
        }      
    }
    for(let level1 in userDataObj[level0]){
        if (level1 === 'child'){
                if (userDataObj.child.child.age > 24) {
                    console.log(userDataObj.child.child.age);
                    console.log(userDataObj.child.child.name);
                    
                    }     
        } 
        for(let level2 in userDataObj[level0][level1]){
            if (level2 === 'child'){
                    if (userDataObj.child.child.child.age > 34) {
                        console.log(userDataObj.child.child.child.age);
                        console.log(userDataObj.child.child.child.name);
                        }  
                        if (typeof userDataObj[level0][level1] !== 'object') {
                            console.log(level1 + ': ' + userDataObj[level0][level1]);
                        }    
            } 
            for(let level3 in userDataObj[level0][level1][level2]){
                if (level3 === 'child'){
                        if (userDataObj.child.child.child.child.age > 45) {
                            console.log(userDataObj.child.child.child.child.age);
                            console.log(userDataObj.child.child.child.child.name);
                            }       
                } 
            }
        }    
    }
}
*/

// change the value of secondchild to firstchild and change the name of thirdchild to second child
let userDataObj = {
    name : 'parent',
    department : 'computer',
    address : 'abcc',
    age : 12,
    child: {
        name : 'firstchild',
        department : 'IT',
        address : 'abcc',
        age : 24,
        child:{
            name : 'secondchild',
            department : 'CS',
            address : 'abcc',
            age : 34,
            child:{
                name : 'thirdchild',
                department : 'EC',
                address : 'abcc',
                age : 45,
                child:{
                    name : 'fourthchild',
                    department : 'EC',
                    address : 'abcc',
                    age : 55,
                }
            }
        }
    }
};

// for(let changeValue1 in userDataObj){
//     if (changeValue1 === 'child'){

//     //console.log("value change to parent"  + '" : "' + changeValue1);
//     }
    for(let changeValue1 in userDataObj){
        if (changeValue1 === 'child'){
            console.log (userDataObj.name);
            //console.log("value change to firstchild"  + '" : "' +  changeValue2 );
        }
        for(let changeValue2 in userDataObj[changeValue1]){
            if (changeValue2 === 'child'){
                userDataObj.child.name = 'secondchild';
                //console.log("value change to secondchild"  + '" : "' +  changeValue3 );
            }
            for(let changeValue3 in userDataObj[changeValue1][changeValue2]){
                if (changeValue3 === 'child'){
                    userDataObj.child.child.name = 'thirdchild';
                    //console.log("value change to thirdchild"  + '" : "' +  changeValue4 );
                }
            }
        }

    }

    


//}

// Display the details
console.log(userDataObj.child);  //details of the renamed firstchild (previously parentchild)
console.log(userDataObj.child.child);         // details of the renamed firstchild (previously secondchild)
//console.log(userDataObj.child.child.child);   // details of the renamed secondchild (previously thirdchild)
//console.log(userDataObj.child.child.child);   // details of the renamed thirdchild (previously fourthchild)








//}
// for(let level0 in userDataObj){
//     if (level0 === 'child'){
//         for(let firstValue in userDataObj[level0]){
//             //console.log(firstValue);
//             if(firstValue === 'age' ){
//                     if(userDataObj.child.age > 24){
//                         console.log(userDataObj[level0][firstValue]);
//                 }
//                // console.log(userDataObj[level0][firstValue]);
//             }
//         }
//     }
// }

        // for(let otherValuedata in userDataObj[valuedata]) {
        //         if(otherValuedata == 'child'){
        //             for(let secondValue in userDataObj[valuedata][otherValuedata]) {
        //                 //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
        //                 if(secondValue == 'age'){
        //                     console.log(userDataObj[valuedata][otherValuedata][secondValue]);
        //                     //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
        //                 }
        //                 //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
        //             }
        //         }
        //         //console.log(otherValuedata);
                
        // }
    

//     if(valueData === 'child'){
//             for(let level1 in userDataObj[valueData]){
//                 //console.log(userDataObj[valuedata]);
//                 if(level1.age > 23){
//                     console.log(userDataObj[valueData][level1]);
//                     //     }
                
//                     // for(let seconDValue in userDataObj[valuedata][firstValue]){
//                     //     //console.log(userDataObj[valuedata][firstValue]);
//                     //     if(secondValue == 'name'){
//                     //         console.log(userDataObj[valuedata][firstValue][secondValue]);
//                     //     }
//                     // }
                
//             }
//         }
//  }

// }
    /*for(let resultvalue in userDataObj[valueData][checkValue]){
        if(resultvalue === 'otherchild'){
            for(let secondValue in userDataObj[valueData][checkValue][resultvalue]) {
                console.log(secondValue);
                // if(secondValue == 'age'){
                //     console.log(userDataObj[valueData][checkValue][resultvalue][secondValue]);
                //     //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
                // }
                //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
            }
        }
    }*/
                




      /*for(let valuedata in userDataObj) {
        //console.log(valuedata);
            if(valuedata === 'child'){
                 for( let firstValue in userDataObj[valuedata]){ // no need of this loop as you already interate this loop in line number 154
                    //console.log(firstValue);
                    if(firstValue['age'] < 44){
                        for(let otherValuedata in userDataObj[valuedata][firstValue]) {
                            if(otherValuedata == 'otherchild'){
                                for(let secondValue in userDataObj[valuedata][firstValue][otherValuedata]) {
                                    if(secondValue == 'age'){
                                        console.log(userDataObj[valuedata][firstValue][otherValuedata][secondValue]);
                                        //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
                                    }
                                    //console.log(secondValue + ' : ' + userDataObj[valuedata][otherValuedata][secondValue]);
                                }
                            }
                            //console.log(otherValuedata);
                            
                        }
                    }
    
                }   
            }
      }    
*/

            //for(let checkValue in userDataObj[valueData]){
                //console.log(checkValue);
                //console.log(checkValue  + ':' + userDataObj[valueData][checkValue]);
                // if(userDataObj[valueData][checkValue] > 44){
                //     //console.log(userDataObj[valueData][checkValue]);
                //     console.log(userDataObj.child.otherchild.age);
                // }
                
            //}
