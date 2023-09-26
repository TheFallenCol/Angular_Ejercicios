
function addNumbers(a: number, b:number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b:number): string => {
    return `${a + b}`;
}

function multiply(firsNumber : number, secondNumber?: number, base: number = 2){
    return firsNumber * base;
}

// const result = addNumbers(1, 2);
// const result2 = addNumbersArrow(1, 2);
// const result3 = multiply(5);
// console.log(result, result2, result3);

interface Character {
    name : string, 
    hp: number, 
    showHp: () => void
};

const healthCharacter = (character:Character, amount:number) => {
    character.hp += amount;
}

const strider : Character = {
    name: "Strider",
    hp: 50,
    showHp: function (): void {
        console.log(`Los puntos de vida son ${ this.hp }`);
    }
}

healthCharacter(strider, 10);
healthCharacter(strider, 30);

strider.showHp();

export{};