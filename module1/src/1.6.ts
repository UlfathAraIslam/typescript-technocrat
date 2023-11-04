// Learning function
// Normal Function
// Arrow function
{
function add(num1:number, num2:number){
    return num1 + num2
}

// add(2, '2')

const addArrow = (num1:number,num2:number): number => num1 + num2

// object --> function ---method

const poorUser = {
    name: 'Ulfath',
    balance:0,
    addBalance(balance:number): string {
        return `My new balance is :${this.balance + balance}`;
    }
};

// callback function

const arr: number[] = [1,2,5];

const newArray: number[] = arr.map((elem:number): number => elem * elem);}