// reference type ---> Object

const user: {
    readonly company: string; //literal type
    firstName: string;
    middleName?: string;  //optional type
    lastName: string;
    isMarried: boolean;

} = {
    company: "Programming Hero",
    firstName: 'ali',
    lastName: 'Islam',
    isMarried: true,
};