{
    // conditional type

    type a1 = number
    type b1 = undefined

    type x = a1 extends null ? true : false //conditonal type
    type y = a1 extends null ? true :  b1 extends undefined? undefined : any ;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }
    //  car or bike or ship
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false

    type HasPlane = CheckVehicle<'plane'>
    // 
}