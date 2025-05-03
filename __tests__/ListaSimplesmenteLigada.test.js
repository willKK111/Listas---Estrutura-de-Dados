import ListaSimplementeLigada from "../src/ListaSimplesmenteLigada";

let l;

beforeEach( ()=>{
    l = new ListaSimplementeLigada();
});

test("Questão 1 - Implemente uma pilha usando a lista ligada", ()=>{

    //foi implementado nos métodos REMOVE os return dos dados que estão sendo retirados

    function push(dado){
        l.append(dado);
    }

    function pop(){
        let topo = l.removeLast();
        return topo;
    }

    function pop2(){
        let base = l.removeFirst();
        return base;
    }

    function length(){
        return l.length();
    }

    let size;
    let removeLast;
    let removeFirst;

    push(50);
    push(40);
    push(30);

    removeLast = pop();
    removeFirst = pop2();
    size = length();

    expect(removeLast).toBe(30);
    expect(removeFirst).toBe(50);
    expect(size).toBe(1);


});


test("Questão 2 - Implemente uma fila usando uma lista ligada", ()=>{


    function enqueue(dado){
        l.append(dado);
    }

    function dequeue(){
        let front = l.removeFirst();
        return front;
    }


    let saiu;

    enqueue(40);
    enqueue(50);
    enqueue(60);

    saiu = dequeue();

    expect(saiu).toBe(40);

});

test("Questão 3 - Implemente uma lista simples utilizando um array de nós (nodes) para guardar as informações.",()=>{

    




});