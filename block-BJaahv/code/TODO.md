# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

```js

function projects(name, id, noOfProjects){
  let user = {}
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}

let projectsMethod = {
  getProjects: function(){
    return user.noOfProject;
  },
  changeName: function(newName){
    user.name = newName;
    return user.name;
  },
  incrementProject: function(value){
    user.noOfProject = user.noOfProject + value;
    return user.noOfProject;
  },
  decrementProject: function(value){
    user.noOfProject = user.noOfProject - value;
    return user.noOfProject;
  }
}

let firstProject = projects(
  "Vasant",
  "11",
  4,
);


```

```js

function projects(name, id, noOfProjects){
  let user = Object.create(projectsMethod);
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects;
  return user;
}

let projectsMethod = {
  getProjects: function(){
    return this.noOfProject;
  },
  changeName: function(newName){
    this.name = newName;
    return this.name;
  },
  incrementProject: function(value){
    this.noOfProject = this.noOfProject + value;
    return this.noOfProject;
  },
  decrementProject: function(value){
    this.noOfProject = this.noOfProject - value;
    return this.noOfProject;
  }
}

let firstProject = projects(
  "Vasant",
  "11",
  4,
);

```

```js

function Projects(name, id, noOfProject){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProject;
}

Projects.prototype = {
  getProjects: function(){
    return this.noOfProject;
  },
  changeName: function(newName){
    this.name = newName;
    return this.name;
  },
  incrementProject: function(value){
    this.noOfProject = this.noOfProject + value;
    return this.noOfProject;
  },
  decrementProject: function(value){
    this.noOfProject = this.noOfProject - value;
    return this.noOfProject;
  }
}

let firstProject = new Projects(
  "Vasant",
  "11",
  4,
);

```


```js

class Projects{
  constructor(name, id, noOfProject){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProject;
  }

  getProjects(){
    return this.noOfProject;
  }
  changeName(newName){
    this.name = newName;
    return this.name;
  }
  incrementProject(value){
    this.noOfProject = this.noOfProject + value;
    return this.noOfProject;
  }
  decrementProject(value){
    this.noOfProject = this.noOfProject - value;
    return this.noOfProject;
  }
}


```