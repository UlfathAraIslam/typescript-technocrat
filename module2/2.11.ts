{
    // Utility types

    // Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type NameAge = Pick<Person, 'name' | 'age'>

    // omit

    type ContactInfo = Omit<Person, 'name' | 'age'>

    // Required

    type PersonRequired = Required<Person>

    // Partial

    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person> //can't change the property value;

    const person1 : PersonReadonly = {
        name: 'mr.xy',
        age: 332,
        contactNo: '433'
    }

    type MyObj = Record<string,string>

    const EmptyObj : Record<string, unknown> = {} //when we know the property type but not the value type

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd'
    }
    // 
}