Console.log(numPlanets); //8
console.log(yearNeptuneDiscovered); // 1846

console.log(discoveryYears); // {YearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like Green

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"

console.log(numbers) // [10,30,20]

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

  [arr[0], arr[1]] = [arr[1], arr[0]]

  raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
  let raceResults = ([first, second, third, ...rest]) => ({{first, second, third, rest}});
  console.log (first, second, third, ...rest);
  