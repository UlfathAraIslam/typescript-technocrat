{
// abstruction : 1. interface 2. abstract

// idea
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

// const Vehicle1: Vehicle1 = {
//     name: 'Toyota',
//     model: 2999
// }

// real implementation
class Car1 implements Vehicle1 {
    startEngine(): void {
        console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the car engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
    test(){
        console.log(`I am testing`);
    }
}

const tototaCar = new Car1();
tototaCar.test();

// abstruct class

// idea
abstract class Car2 {
    abstract startEngine(): void
    abstract stopEngine(): void 
    abstract move(): void
    test(){
        console.log(`I am testing`);
    }

}
class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log(`i am starting the car`);
    }
    stopEngine(): void {
        console.log(`i am stopping the car`);
    }
    move(): void {
        console.log(`i am moving the car`);
    }
}
// const hondacar = new Car2();
// hondacar.startEngine();

// 
}