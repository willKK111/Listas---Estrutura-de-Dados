import Pilha from "../src/Pilha";
import PilhaDePratos from "../src/PilhaDePratos";

let p;

beforeEach(() => {
  p = new Pilha();
});

test("Questão 1 - Colocar uma palavra e inverter a palavra colocada", () => {
  let p1 = new Pilha();

  function palavra(texto) {
    for (let i = 0; i < texto.length; i++) {
      p.push(texto[i]);
    }
  }

  palavra("ABACAXI");

  while (p.length() > 0) {
    let letra = p.pop();
    p1.push(letra);
  }

  expect(p1.toString()).toBe("IXACABA");
});

test("Questão 2 - Usar um único Array para 2 pilhas", () => {
  let topoA = 0;
  let topoB = p.tam();

  function ÉVaziaA() {
    if (p.isEmpty() === topoA) {
      return true;
    } else {
      return false;
    }
  }

  function ÉVaziaB() {
    if (p.tam() === topoB) {
      return true;
    } else {
      return false;
    }
  }

  function empilhaA(elemento) {
    if (topoA === topoB) {
      throw Error("Pilha cheia");
    }

    topoA++;
    p[topoA] = elemento;
  }

  function empilhaB(elemento) {
    if (topoB === topoA) {
      throw Error("Pilha cheia");
    }

    topoB--;
    p[topoB] = elemento;
  }

  function desempilhaA() {
    topoA--;
    return p[topoA];
  }

  function desempilhaB() {
    topoB++;
    return p[topoB];
  }

  empilhaA(1);
  empilhaB(1);
  empilhaA(2);
  empilhaA(5);
  empilhaB(1);
  empilhaB(1);
  empilhaA(3);
  // Se tirar esse comentário debaixo e der o npm test irá mostrar que a pilha está cheia
  //empilhaA(1);

  //aqui ve se as pilhas A e B estão vazias
  expect(ÉVaziaA()).toBe(false);
  expect(ÉVaziaB()).toBe(false);

  desempilhaA();
  desempilhaB();
});

test("Questão 3 - Fazer troca da base da pilha para o topo da pilha usando uma função(pode usar uma auxiliar)", () => {
  p.push(1);
  p.push(2);
  p.push(3);
  p.push(4);

  let pilha1 = new Pilha(p.tam());

  function troca() {
    let topoInicial = p.pop();
    let basePilha;

    while (p.length() > 0) {
      basePilha = p.pop();
      pilha1.push(basePilha);
    }

    p.push(topoInicial);
    while (pilha1.length() > 0) {
      let auxiliar2 = pilha1.pop();
      p.push(auxiliar2);
    }
    p.push(basePilha);
  }

  troca();

  expect(p.top()).toBe(1);
});

test("QUESTÃO 4. Implemente um conversor de números decimais para binários utilizando uma pilha", () => {
  function conversor(decimal) {
    let binario = decimal.toString(2);
    return binario;
  }

  let binario = conversor(10);
  p.push(binario);
  expect(p.top()).toBe("1010");
});

test("Questão 5 - Veja se a continuação de caracter corresponde ao ser bem-formado ou mal-formado", () => {
  let pilha = new Pilha(10);

  function verificaFormacao(texto) {
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === "[" || texto[i] === "(") {
        pilha.push(texto[i]);
      } else {
        if (pilha.isEmpty()) {
          return false;
        }
        let topo = pilha.pop();
        if (
          (topo === "(" && texto[i] !== ")") ||
          (topo === "[" && texto[i] !== "]")
        ) {
          return false;
        }
      }
    }
    return pilha.isEmpty();
  }

  let valor = verificaFormacao("[()]");
  expect(valor).toBe(true);

  let valor2 = verificaFormacao("()))");
  expect(valor2).toBe(false);
});

test("Questão 6 - Notação Polonesa Reversa", () => {});

test("Questão 7 - Numeros duplicados", () => {
  p.push(1);
  p.push(2);
  p.push(2);
  p.push(3);
  p.push(1);
  p.push(1);
  p.push(3);

  function duplicatas() {
    let numeros = [];
    let set = new Set();

    for (let i = p.dados.length - 1; i >= 0; i--) {
      let numero = p.dados[i];
      if (!set.has(numero)) {
        set.add(numero);
        numeros.push(numero);
      }
    }
    return numeros.reverse().join(",");
  }

  let normal = duplicatas();
  expect(normal).toBe("2,1,3");
});

test("Questão 8 - Uma pilha que nela mesmo tem outras pilhas, funções empilha e desempilha", () => {
  let prato = new PilhaDePratos(3);
  prato.empilha(20);
  prato.empilha(30);
  prato.empilha(40);
  //esse empilha esta em outra pilha e não na mesma que os 3 empilha anteriores
  prato.empilha(50);
  let valor = prato.desempilha();

  expect(valor).toBe(50);
});
