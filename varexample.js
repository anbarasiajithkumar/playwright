function varTest()
//function scoped, can be redeclaredand updated. not used much in modern codes.
{
    var x=10;
    if(true)
    {
        var x=20; // same variable redeclared and updated
        console.log(x);

    }
    var x=30;
  console.log(x); 
  
}
  varTest(); 