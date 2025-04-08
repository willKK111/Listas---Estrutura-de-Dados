import Fila from "../src/Fila";
import Pilha from "../src/Pilha";
import Deque from "../src/Deque";

let f;

beforeEach(() => {
  f = new Fila();
});

test("Questão 1 - Fazer uma pilha usando 2 filas", () => {
  let fila = new Fila();

  function push(elemento) {
    f.enqueue(elemento);
  }

  function pop() {
    let topo;
    let dado;
    while (f.length() > 1) {
      dado = f.front();
      fila.enqueue(dado);
      f.dequeue();
    }
    topo = f.front();
    f.dequeue();
    while (fila.length() > 0) {
      dado = fila.front();
      f.enqueue(dado);
      fila.dequeue();
    }
    return topo;
  }

  push(2);
  push(3);
  push(4);

  let sobre = pop();

  expect(sobre).toBe(4);
});

test("Questão 2 - Fazer uma fila usando 2 pilhas", () => {
  let pilha1 = new Pilha();
  let pilha2 = new Pilha();

  function enqueue(elemento) {
    pilha1.push(elemento);
  }

  function dequeue() {
    let topo;
    let dado;

    while (pilha1.length() > 1) {
      dado = pilha1.pop();
      pilha2.push(dado);
    }
    topo = pilha1.pop();
    return topo;
  }

  enqueue(1);
  enqueue(2);
  enqueue(3);

  let resposta = dequeue();

  expect(resposta).toBe(1);
});

test("Questão 3 - A empresa, que carrega, no máximo, 10 caminhões por dia, pretende informatizar esse processo. ", () => {
  //caminhão
  let fila1 = new Fila(10);
  //carregamento
  let fila2 = new Fila(10);

  function verificaCaminhaoAguardo() {
    return !fila1.isEmpty();
  }

  function maximoCaminhao() {
    return fila1.isFull();
  }

  function numeroCarregamento() {
    return fila2.isFull();
  }

  function caminhaoAguardando() {
    let cont = [];
    while (!fila1.isEmpty()) {
      cont.push(fila1.front());
      fila1.dequeue();
    }
    return cont;
  }

  //Verificar se há caminhões no aguardo
  let aguardo;
  //expect(aguardo).toBe(false);

  fila1.enqueue(1);
  aguardo = verificaCaminhaoAguardo();
  expect(aguardo).toBe(true);

  // verificar se tem o máximo de caminhões;
  fila1.enqueue(2);
  fila1.enqueue(3);
  fila1.enqueue(4);
  fila1.enqueue(5);
  fila1.enqueue(6);
  fila1.enqueue(7);
  fila1.enqueue(8);
  fila1.enqueue(9);
  fila1.enqueue(10);
  let resposta = maximoCaminhao();
  expect(resposta).toBe(true);

  //verificar se o número de carregamento por dia encheu
  fila2.enqueue(1);
  fila2.enqueue(2);
  fila2.enqueue(3);
  fila2.enqueue(4);
  fila2.enqueue(5);
  fila2.enqueue(6);
  fila2.enqueue(7);
  fila2.enqueue(8);
  fila2.enqueue(9);
  fila2.enqueue(10);
  resposta = numeroCarregamento();
  expect(resposta).toBe(true);

  //ver os caminhões que estão no aguardo
  fila1.dequeue();
  fila1.dequeue();
  let caminhoes = caminhaoAguardando();
  expect(caminhoes).toStrictEqual([3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Questão 4 - Intercalar duas filas formando apenas uma ", () => {
  let fila1 = new Fila();
  let fila2 = new Fila();
  let soma = fila1.tam();
  let soma2 = fila2.tam();
  let soma3 = soma + soma2;
  let filaPrincipal = new Fila(soma3);

  function intercala() {
    while (!fila1.isEmpty() && !fila2.isEmpty()) {
      filaPrincipal.enqueue(fila1.front());
      fila1.dequeue();
      filaPrincipal.enqueue(fila2.front());
      fila2.dequeue();
    }
  }

  fila1.enqueue(1);
  fila2.enqueue(10);
  fila1.enqueue(2);
  fila2.enqueue(20);

  intercala();
  expect(filaPrincipal.length()).toBe(4);
  expect(filaPrincipal.front()).toBe(1);
  filaPrincipal.dequeue();
  expect(filaPrincipal.front()).toBe(10);
});

test("Questão 5 - Implemente um deque", () => {

  let deque = new Deque();
  deque.addFront(2);
  deque.addBack(3);
  deque.removeBack();
  deque.removeFront();

  expect(deque.isEmpty()).toBe(true);


});


test("Questão 6 - fazer uma função que reverte a fila fazendo ela recursiva", ()=>{

  let filaPrincipal = new Fila();
  function reverseQueue() {
    if (filaPrincipal.isEmpty()) {
      return;
    }

    let front = filaPrincipal.front();
    filaPrincipal.dequeue();
 
    reverseQueue();
  
    filaPrincipal.enqueue(front);
  }
  
  filaPrincipal.enqueue(1);
  filaPrincipal.enqueue(2);
  filaPrincipal.enqueue(3);

  reverseQueue();

  expect(filaPrincipal.front()).toBe(3);


});
