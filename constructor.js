function person(name, age)
{
    this.name= name;
    this.age= age;
    }
    let person1 = new person("abc", 33);
    let person2 = new person("defg",55);

    console.log(person1.age);
    console.log(person2.name);

