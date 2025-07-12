// let person = {
//     firstname: 'James',
//     lastname: 'micheal',
//     age:28,
//     isStudent: false
// };
// person.firstname='testing'
//     console.log(person);
    
    // //nested object
    // let person2= {
    //     firstname: 'tester1',
    //     lastname: 'last',
    //     subjects: {math: '24', english: '34' },
    //     age:'24'
    // };
    // console.log(person2.subjects.math);
    // console.log(typeof person2.subjects); 

    //calling function inside object
    let person3= 
    {
        name: 'tester3',
        email:'test@test.com',
        position:function(){
            console.log('function called');
        }
    }
    person3.position();