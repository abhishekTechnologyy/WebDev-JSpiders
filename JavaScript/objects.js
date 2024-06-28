let emp = 
{
    name: "john" , 
    id: 10 , 
    role: "QA" , 
    experience: 5,
    skills:["html","css","js"],
    skillSet:
    {
        skillOne:'JAVA',
        skillTwo:'SQL',
        skillThree:'WEB-TECHNOLOGY'

        //  NESTED OBJECT
    },

    address:
    {
        number:80,
        street:10,
        locality:'J P Nagar',
        city:'Bangalore',
        pincode:560076

        //   NESTED OBJECT
    }
}

// console.log(emp);
// console.table(emp);
// console.log(emp['name']);

// emp.experience = 6;
// emp.age = 40;

// console.table(emp);

console.table(emp)
console.table(emp.skills[1])




