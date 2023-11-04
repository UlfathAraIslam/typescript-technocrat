{
    // generic type

    type GenericArray<t> = Array <t>

    // const rollNumber : number[] = [1,2,4];
    const rollNumber : GenericArray <number> = [1,2,4];

    // const mentors: string [] = ['Mr.X','Mr.Y', 'Mr.Z'];
    const mentors: GenericArray <string> = ['Mr.X','Mr.Y', 'Mr.Z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray <boolean> = [true, false, true];

    const user : GenericArray<{name:string, age: number}> = [
        {
            name: 'ulfath',
            age: 22
        },
        {
            name: 'lili',
            age: 34
        }
    ]

    const add = (x: number, y: number) => x+y;
    add(3,4);

    // generic tuple
    
    type GenericTuple <x,y> = [x,y]
    const manush : GenericTuple<string, string> = ['Mr.X', 'Mr.Y']

    const userWithID : GenericTuple<number,{name:string,email:string}> = [1234, {name: 'ulfath', email: 'sf@gmail.com'}]

    // 
}