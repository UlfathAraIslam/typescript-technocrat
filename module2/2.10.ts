{
    // Mapped types

    const arrayOfNumbers: number[] = [1,4,5];

    // const arrayOfStrings: string[] = ['1','4','5']

    const arrayOfStrings: string[] = arrayOfNumbers.map((number) => number.toString());

    console.log(arrayOfStrings);

    type AreaNumber = {
        height: number;
        width: number;
    };

    type height = AreaNumber["height"] //lookup type

    // type AreaString = {
    //     height: string;
    //     widht: string;
    // }

    // keyof AreaNumber => 'height' | 'width'

    type AreaString<T> = {
        [key in keyof T] : T[key];
    }

    const area1 : AreaString<{height: string; width: number}>={
        height: '100',
        width: 50
    }

    // 
}