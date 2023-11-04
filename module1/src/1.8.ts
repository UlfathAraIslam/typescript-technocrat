// destructuring

{
    // object destructuring
    const user = {
        name: {
            firstName: 'ulfath',
            lastName: 'islam'
        },
        contactNo: '303489348',
};
const {
    contactNo,
    name: {firstName},
} = user;

// array destructuring

const myFriends = ['alo', 'rano', 'fgggg','rose','rhuib'];

const [,, bestFriend, ...rest ] = myFriends;


}