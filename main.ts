interface Food {
    price: number
    name: string
    hasHadTopping: boolean
}

export class Cupcake implements Food {
    price = 1;
    name = 'Cupcake';
    hasHadTopping = false;
}

export class Cookie implements Food {
    price = 2;
    name = 'Cookie';
    hasHadTopping = false;
}

export class Topping implements Food {
    price = 0
    name = ''
    hasHadTopping = false;


    constructor(public cake: Food) {
        console.log(this.price)
        this.price += cake.price
        this.name = `${cake.name} avec `
        cake.hasHadTopping = true;
    }
}

export class Chocolate extends Topping {
    constructor(public cake: Food) {
        super(cake)
        this.price += 0.1
        this.name += 'chocolat noir'
    }
}

export class Nut extends Topping {
    constructor(public cake: Food) {
        super(cake)
        this.price += 0.2
        this.name += 'noix'
    }
}

export function displayCakeInformation(cake: Cupcake) {
    return `${cake.name} à ${cake.price}€`;
}




