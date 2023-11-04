{
    // 
    // ternery operator  || optional chaining || nullish coalescing

    const age: number = 18;

    if(age >=18){
        console.log('adult');
    }
    else {
        console.log('not adult');
    }

    const isAdult = age >=18 ? 'adult' : 'not adult'
    // console.log(isAdult);

    //  nullish coalescing operator
    // null / undefined ---> decision making

    const isAthenticated = "";

    const result1 = isAthenticated ?? 'Guest';
    const result2 = isAthenticated ? isAthenticated : 'Guest';
    console.log({result1});
    console.log({result2});

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentaddress?: string;
        }
    }

    const user: User = {
        name: 'Ulfath',
        address: {
            city: 'ctg',
            road: 'Awesome Road',
            presentAddress:'dhk'
        }
    }

    const permanentaddress = user?.address?.permanentaddress ?? "No Permanent address";
    console.log(permanentaddress);
    // 
}