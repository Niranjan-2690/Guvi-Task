class Person{
    constructor(name = '', mobile = '', email = '', dob = '', address = ''){
        this.name = name,
        this.mobile = mobile,
        this.email = email,
        this.dob = dob,
        this.address = address
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getMobile(){
        return this.mobile;
    }

    setMobile(mobile){
        this.mobile = mobile;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    getDob(){
        return this.dob;
    }

    setDob(dob){
        this.dob = dob;
    }

    getAddress(){
        return this.address;
    }

    setAddress(address){
        this.address = address;
    }

    getDetails(){
        return `Name: ${this.name}, Mobile: ${this.mobile}, Email: ${this.email}, DOB: ${this.dob}, Address: ${this.address}`
    }
}

const person = new Person("Niranjan", "9566092441", "rpniranjan@hotmail.com", "26-September-1990", "35/2, 28th Street, G.K.M. Colony, Chennai")
console.log(person.getDetails())

person.setAddress("35/2, 28th Balavinayar koil street, G.K.M. Colony, Chennai")

console.log(person.getDetails())