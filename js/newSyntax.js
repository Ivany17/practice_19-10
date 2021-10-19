'use strict'


class UserClass{
    /**
     * 
     * @param {string} name 
     * @param {string} sname 
     * @param {number} age 
     */
    constructor(name, sname, age){
        this.name = name;
        this.sname = sname;
        this.age = age;
    }
    get age(){
        return this.age;
    }
    set age(age){
        if(typeof age !== 'number'){
            throw new TypeError('Age must be number');
        }
        if(age<0 || age> MAX_AGE){
            throw new RangeError(`Age must be >0 and <${MAX_AGE}.`);
        }
        this.age = age;
    }
    get fullName(){
        return `${this.name} ${this.sname}`;
    }
    set fullName(newFullName){
        if(typeof newFullName !== 'string'){
            throw new TypeError('Age must be string');
        }
        const arrFullName = newFullName.split(' ');
        if(arrFullName.length !== 2){
            throw new RangeError(`must be = 2. `);
        }
        this.name = arrFullName[0];
        this.sname = arrFullName[1];
    }
    isAdult(){
        return this.age>=ADULT_AGE;
    }
}

const u2 = new UserClass('Elon', 'Musk', 65);


class Worker{
    constructor(name, sname, rate, days){
        this.name = name;
        this.sname = sname;
        this.rate = rate;
        this.days = days;
    }
    get salary(){
        return this.rate*this.days;
    }
}

const w1 = new Worker('Elon', 'Musk', 300, 25);
console.log(w1.getSalary());