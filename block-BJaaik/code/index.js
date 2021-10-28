class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name} eats only oats in morning`);
    }
    sleep(){
        console.log(`${this.name} sleeps at 10:00 pm daily`);
    }
    walk(){
        console.log(`${this.name} walks 10km daily`);
    }
}

class Player extends Person{
    constructor(name, age, gender,sportsName){
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play(){
        console.log(`${this.name} plays ${this.sportsName}`);
    }
}

class Cricketer extends Player{
    constructor(name, age, gender,sportsName,teamName){
        super(name, age, gender,sportsName);
        this.teamName = teamName;
    }
    playCricket(){
        console.log(`${this.name} plays ${this.sportsName} in ${this.teamName}`);
    }
}

class Teacher extends Person{
    constructor(name, age, gender,instituteName){
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach(){
        console.log(`${this.name} teaches history in ${this.instituteName}`);
    }
}

class Artist extends Person{
    constructor(name, age, gender,kind){
        super(name, age, gender);
        this.kind = kind
    }
    createArt(){
        console.log(`${this.name} is a ${this.kind} artist`);
    }
}

