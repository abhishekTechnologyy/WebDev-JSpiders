class User
{
    constructor(firstName,lastName,email,password,salary)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.salary = salary;
    }
    //methods
     fullName = () => `the full name of the user is ${this.firstName} ${this.lastName}`
     annualSal = () => `the annual salary of user is ${(this.salary * 12)/100000} lakhs per annum`
}

let user1 = new User("Abhishek","Sinha","techabhi2000@gmail.com",1234,1000000);
console.table(user1);

console.log(user1.fullName());
console.log(user1.annualSal());

let user2 = new User("Ashutosh","Sinha","sinhaash98@gmail.com",9876,1000000);

console.table(user2);

console.log(user2.fullName());
console.log(user2.annualSal());

// console.log(user1.firstName+" "+user1.lastName);
// console.log(`The full name of 1st user is ${user1.firstName} ${user1.lastName}`);

