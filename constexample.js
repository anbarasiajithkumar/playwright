 // Const = block scoped , cant be updated or reinitiated
  // example 1
function constTest()
{
            if (true)
    {
        const x=20;
        console.log(x);
    }
      x=30;  
     console.log(x); // here it print 30 as output and no error since it takes as global variable as x is not declared in function 
}
constTest();


// example 2
function constTest2()
{
     const y=10;
      if (true)
    {
        const y=20;
        console.log(y);    
    }
     y=30;  // it throws error since function variable already declared and update here will not be accepted and shows error
     console.log(y);
}
constTest2();
