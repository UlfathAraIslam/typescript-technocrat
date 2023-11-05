{
    // promise

    // defining a type
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }

    // simulating fetching data asynchronously
    const getTodo = async(): Promise<Todo> => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1'
        );

        const data = await response.json();
        console.log(data);
        return data
        
     }
    //  calling the asynchronous function
     getTodo()

    type Something = {something: string};

    // simulating a promise
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject)=> {
            const data : Something = {something: 'something'}
            if(data){
                resolve(data)
            } else{
                reject('failed to load data')
            }
        })
    }

    // using the promise in an async function
    const showData = async() : Promise<Something> => {
        const data: Something = await createPromise();
        console.log(data);
        return data
    };
    // calling the async function
    showData()

    // 
}