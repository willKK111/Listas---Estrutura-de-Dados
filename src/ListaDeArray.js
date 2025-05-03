import NoArray from "./NoArray";

class ListaDeArray{

    constructor(tam = 5){
        this.tam = tam;
        this.lista = [];
        this.head = 0;
    }

    append(elemento){
        if(this.head === 0){
            let novoIndice = this.head++;
            this.lista[novoIndice] = new NoArray(elemento, novoIndice);
        }
        for(let i = 0; i < this.tam; i++){
            if(this.lista[i].proximo === null){
                this.lista[i++] = new NoArray(elemento);
            }
        }

    }

}