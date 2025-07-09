function varTest()
{
    //block scoped, caanot be redeclared but can be updated 
    let x=10;
    if(true)
    {
        let x=20;
        console.log(x);
           }
    //let x=30;  cannot redeclare x value and it is not acceptable
     x=40; // can be updated
    console.log(x);
}

varTest();

