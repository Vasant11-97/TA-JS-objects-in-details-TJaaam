let animalMethods = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat !`);
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
        return newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
    }
}

function animal(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName: function(newName){
        this.name = newName;
        return name;
    },
    changeColor: function(newColor){
        this.color = newColor;
        return color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I cam also bark`
    }

}

function dog(name, color){
    let dog = Object.create(dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}


let catMethods = {
    meow: function(){
        alert(`I am ${this.name} and I can do meow meow`);
    },
    changeName: function(newName){
        this.name = newName;
        return name;
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor;
        return colorOfEyes;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.colorOfEyes} color. I can also do meow meow`
    }

}

function cat(name, colorOfEyes){
    let cat = Object.create(catMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}


