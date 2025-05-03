import FilaPrioridade from "../src/FilaPrioridade";


let fP;

beforeEach( ()=>{
    fP = new FilaPrioridade();
});


test("Questão 1 - Incremente um Heap Minimo", ()=>{

    //nesse caso a fila de prioridade já foi feita com o heap minimo então só será utilizado

    fP.inserir(12,1);
    fP.inserir(10,5);
    fP.inserir(50,-1);

    let minimo = fP.remover();

    expect(minimo.data).toBe(50);

});