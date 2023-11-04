{
    // 
    // union types

    // string literal type
    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    // type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';

    // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

    // type User = {
    //     fullName: "ulfath";
    //     email?: 'string';
    //     gender: 'male'| 'female';
    //     bloodGroup: 'O+'| 'A+' | 'AB+'
    // }
    // const user1: User ={
    //     fullName:"ulfath",
    //     gender:'female',
    //     bloodGroup: 'O+'

    // }

    //  intersection type

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullstackDeveloper = {
        skills: ['HTML', 'CSS', 'EX{RESS'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer'
    }

    // 
}