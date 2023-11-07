{
    // oop -inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address
        }
        getSleep(numberOfHours : number){
            console.log(`${this.name} will sleep for ${numberOfHours} `);
        }
    }

    class student extends Person{

        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
    } 

    const student1 = new student('Mr. student', 20, 'uganda');
    student1

    class Teacher extends Person {
        
        designation: string;

        constructor(name: string, age: number, address: string ,designation: string){
            super(name, age, address)
            this.designation = designation
        }
        getSleep(numberOfHours : number){
            console.log(`${this.name} will sleep for ${numberOfHours} `);
        }
        takeClass(numOfClass: number){
            console.log(`${this.name} will take class for ${numOfClass}`);
        }
    } 
    const teacher = new Teacher ('Mr. student', 20, 'uganda', 'professor');
    teacher

    // 
}