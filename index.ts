interface person {
    Name: string
    Age: number
    isStudent: boolean

}

interface book {
    Title: string
    Author: string
    Year: number

}
// 1
function bigNum(num1: number, num2: number): number {
    if (num1 > num2) {
        return num1;
    } else {
        return num2
    }

}
// 2
function bigNum2(num1: number, num2: number): void {
    if (num1 > num2) {
        console.log(num1)
    } else if (num2 > num1) {
        console.log(num2)
    }
}
// 3
const oddEven = (num: number): string => {
    if (num % 2 == 0) {
        return "even!"
    } else {
        return "odd"
    }
}
// 4
const lengthStr = (str: string): number => {
    return str.length
}
// 5
const arrNum = (num: number): number[] => {
    let arr: number[] = []
    for (let i: number = 0; i < num; i++) {
        arr.push(i)
    }
    return arr
}
// 6
const arrBigNum = (arr1: number[]): number => {
    let bigNum: number = 0
    for (let i: number = 0; i < arr1.length; i++) {
        if (i > bigNum) {
            bigNum = arr1[i]
        }
    }
    return bigNum
}
// 8
const printPerson = (person: person): void => {
    console.log(`name ${person.Name}, age ${person.Age}, isStudent ${person.isStudent}`)
}

// 9
const isMinor = (person: person): boolean => {
    if (person.Age < 18) {
        return false
    } else {
        return true
    }
}

// 11
type Reader = person & {
    favoriteBook : book
};



// 12
const people: Reader[] = [
    {
      Name: "Adam",
      Age: 25,
      isStudent: true,
      favoriteBook: {
        Title: "Favorite Book",
        Author: "Book Author",
        Year: 2020,
      },
    },
    {
      Name: "Sarah",
      Age: 30,
      isStudent: false,
      favoriteBook: {
        Title: "Interesting Book",
        Author: "Book Author",
        Year: 2018,
      },
    },
    {
      Name: "Daniel",
      Age: 22,
      isStudent: true,
      favoriteBook: {
        Title: "Interesting Book",
        Author: "Book Author",
        Year: 2018,
      },
    },
  ];
  
  
  
  
function findOldReader(people : Reader[]): Reader | undefined{
    let oldreader: Reader | undefined = undefined;

    for (const reader of people) {
        if (!oldreader || reader.Age > oldreader.Age) {
            oldreader = reader;
           
    }
    return oldreader
}}

console.log(findOldReader(people))

// 13
function findOldestBook(readers: Reader[]): book | undefined {
    let oldestBook: book | undefined = undefined;
    let oldestYear: number | undefined = undefined;
    for (const reader of readers) {
            if (!oldestYear || reader.favoriteBook.Year < oldestYear) {
                oldestYear = reader.favoriteBook.Year;
                oldestBook = reader.favoriteBook;
            }
        }
return oldestBook;
}


