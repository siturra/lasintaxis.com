import Link from 'next/link'
import { CopyBlock } from 'react-code-blocks'

export default function Page() {
  return (
    <div>
      <h1>
        <Link href="/">Javascript</Link>
      </h1>
      <div className="syntax">
        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_de_comparaci%C3%B3n"
              target="_blank"
              rel="noreferrer">
              Operadores de comparación
            </a>
          </h2>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>==</td>
                <td>Igual</td>
              </tr>
              <tr>
                <td>!=</td>
                <td>No es igual</td>
              </tr>
              <tr>
                <td>===</td>
                <td>Estrictamente Igual</td>
              </tr>
              <tr>
                <td>!==</td>
                <td>Desigualdad estricta</td>
              </tr>
              <tr>
                <td>{'>'}</td>
                <td>Mayor que</td>
              </tr>
              <tr>
                <td>{'>='}</td>
                <td>Mayor o igual que</td>
              </tr>
              <tr>
                <td>{'<'}</td>
                <td>Menor que</td>
              </tr>
              <tr>
                <td>{'<='}</td>
                <td>Menor o igual que</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos"
              target="_blank"
              rel="noreferrer">
              Operadores lógicos
            </a>
          </h2>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&&</td>
                <td>AND (y)</td>
              </tr>
              <tr>
                <td>||</td>
                <td>OR (o)</td>
              </tr>
              <tr>
                <td>!</td>
                <td>Not (negación)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#aritmeticos"
              target="_blank"
              rel="noreferrer">
              Operadores aritméticos
            </a>
          </h2>
          <table>
            <thead>
              <tr>
                <th>Operador</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>+</td>
                <td>Suma</td>
              </tr>
              <tr>
                <td>-</td>
                <td>Resta</td>
              </tr>
              <tr>
                <td>*</td>
                <td>Multiplicación</td>
              </tr>
              <tr>
                <td>/</td>
                <td>División</td>
              </tr>
              <tr>
                <td>%</td>
                <td>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
                    target="_blank"
                    rel="noreferrer">
                    Residuo
                  </a>
                </td>
              </tr>
              <tr>
                <td>++</td>
                <td>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment"
                    target="_blank"
                    rel="noreferrer">
                    Incremento
                  </a>
                </td>
              </tr>
              <tr>
                <td>--</td>
                <td>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement"
                    target="_blank"
                    rel="noreferrer">
                    Decremento
                  </a>
                </td>
              </tr>
              <tr>
                <td>**</td>
                <td>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation"
                    target="_blank"
                    rel="noreferrer">
                    Exponent
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions"
              target="_blank"
              rel="noreferrer">
              Funciones
            </a>
          </h2>
          <CopyBlock
            text={`function square(number) {
  return number * number;
}`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"
              target="_blank"
              rel="noreferrer">
              if / else if / else
            </a>
          </h2>
          <CopyBlock
            text={`if(x > 50) {
  // do something
} else if(x > 5) {
  // do another thing
} else {
  // do some default thing
}`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"
              target="_blank"
              rel="noreferrer">
              Switch
            </a>
          </h2>
          <CopyBlock
            text={`switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

console.log("Is there anything else you'd like?");`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>For Loop</h2>
          <CopyBlock
            text={`for (let number = 0; number <= 4; number++) {
  console.log(number);
} 
console.log('End');

//0
//1
//2
//3
//4
//End
`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
        <div>
          <h2>While Loop</h2>
          <CopyBlock
            text={`let number = 0;
while (number < 4) {
  console.log(number);
  number = number + 1; // number++;
} 

//0
//1
//2
//3
`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>

        <div>
          <h2>Class</h2>
          <CopyBlock
            text={`class Rectangle {
  height;
  width;
  
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100`}
            language="javascript"
            theme="dracula"
            showLineNumbers={true}
            codeBlock
          />
        </div>
      </div>
    </div>
  )
}
