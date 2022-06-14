class CoffeeMachine {
  constructor(grounds, water) {
    this.grounds = grounds;
    this.water = water;
  }

  brew() {
    return this.grounds + this.water;
  }
}

class ExpressoMachine extends CoffeeMachine {
  constructor(grounds, water) {
    super(grounds, water);
  }

  brew() {
    return super.brew() + " expresso";
  }
}

class Animal {
  walk() {
    return "I'm walking";
  }
}

class Dog extends Animal {
  walk() {
    return super.walk() + " and I'm a dog";
  }
}

class Tiger extends Animal {
  walk() {
    return super.walk() + " and I'm a tiger";
  }
}

//================================================

class Animal {
  walk() {
    return "I'm walking";
  }

  petMe() {
    return "Pet the animal";
  }
}

class Dog extends Animal {
  walk() {
    return super.walk() + " and I'm a dog";
  }

  petMe() {
    return super.petMe() + " and I'm a dog";
  }
}

class Tiger extends Animal {
  walk() {
    return super.walk() + " and I'm a tiger";
  }

  petMe() {
    return "DONT PET TIGERS!";
  }
}
