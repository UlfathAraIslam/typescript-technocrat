{
    // 
    // Generic with interface

    interface Developer<T,X=null> {
        name: string;
        computer:{
            brand: string;
            model: string;
            releaseYear: number
        },
        smartWatch: T;
        bike?: X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }
    const poorDeveloper : Developer<EmilabWatch, null> = {
        name: 'ulfath',
        computer: {
            brand: 'Asus',
            model: 'X-24545',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'dfdf',
            display: 'OLED'
        }
    }
    interface AppleWatch  {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string

    }

    const richDeveloper : Developer<AppleWatch,YamahaBike> = {
        name: 'ulfath',
        computer: {
            brand: 'Asus',
            model: 'X-24545',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Apple watch',
            model: 'dfdf',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc'

        }
    }
    // 
}