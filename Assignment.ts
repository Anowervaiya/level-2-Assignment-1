
function formatString(input: string, toUpper?: boolean): string {

    if (toUpper === false) {
        return input.toLowerCase();
    }
    else { return input.toUpperCase() }
}
const result1 = formatString("Hello");
const result2 = formatString("Hello", true);
const result3 = formatString("Hello", false);

// console.log(result1,result2,result3);

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

    const result = items.filter(item => item.rating >= 4)
    return result

}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

//  console.log(filterByRating(books)); 




function concatenateArrays<T>(...arrays: T[][]): T[] {

    return arrays.flat();
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));



class Vehicle {
    private make: string;
    year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo(): string {
        return `"Make: ${this.make} , Year : ${this.year}"`
    }
}


class Car extends Vehicle {

    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }

    getModel(): string {

        return `"Model : ${this.model}"`
    }
}


const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());



function processValue(value: string | number): number {

    if (typeof value === "string") {
        return value.length
    }

    else {
        return value * 2
    }


}

// console.log(processValue("hello") );// Output: 5
// console.log(processValue(10));   // Output: 20



interface Product {
    name: string;
    price: number
}

function getMostExpensiveProduct(product: Product[]): Product | null {

    if (product.length === 0) {
        return null
    }
    const result = product.reduce((maxProduct, currentProduct) => {
        return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
    })

    return result
}


const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday

}

function getDayType(day: Day): string {

    if (day === Day.Friday || day === Day.Saturday) {
        return "Weekend"
    }

    else {
        return "Weekday"
    }

}
// console.log(getDayType(Day.Friday));
// console.log(getDayType(Day.Sunday));


async function squareAsync(n: number): Promise<number> {

    return new Promise<number>((resolve, reject) => {

        if (n < 0) {
            return reject(('Negative number is not allowed'))
        }

        setTimeout(() => {
            resolve(n * n)
        }, 1000);
    })
}

// squareAsync(4).then(console.log).catch(console.error);
// squareAsync(-4).then(console.log).catch(console.error);
