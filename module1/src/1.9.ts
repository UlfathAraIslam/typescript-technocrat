{
    // 
    // Type alias for object

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Mezba',
        age: 50,
        gender: 'male',
        contactNo: '09978667',
        address: 'ctg'
    };

    const student2: Student = {
        name: 'mili',
        age: 50,
        gender: 'female',
        address: 'ctg'
    };

    // type alias for type

    type UserName = string
    type IsAdmin = boolean

    const userName: UserName ='Ulfath'
    const isAdmin: IsAdmin = true;

    // type alias for function
     type Add = (num1: number, num2: number) => number

    const add: Add =(num1, num2) => num1 + num2;
    // 
}