import No from "./No";

class Lista {
    constructor() {
        this.head = new No();
    }

    add(elemento) {
        let novoNo = new No(elemento);
        novoNo.proximo = this.head.proximo;
        this.head.proximo = novoNo;
    }
    append(elemento) {
        let novoNo = new No(elemento);
        let atual = this.head;
    
        while (atual.proximo !== null) {
            atual = atual.proximo;
        }
    
        atual.proximo = novoNo;
    }
    removeLast() {
        let node_a;
        let node_b;
        if (!this.isEmpty()) {
            node_a = this.head;
            node_b = this.head.proximo;
            while (node_b.proximo !== null) {
                node_a = node_b;
                node_b = node_b.proximo;
            }
            node_a.proximo = null;
        }
        return node_b.dados;
    }
    removeFirst() {
        let aux;
        if (!this.isEmpty()) {
            aux = this.head.proximo;
            this.head.proximo = aux.proximo;
        }
        return aux.dados;
    }
    isEmpty() {
        return this.head.proximo === null;
    }
    length() {
        let result = 0;
        let node_b = this.head.proximo;
        while (node_b !== null) {
            result++;
            node_b = node_b.proximo;
        }
        return result;
    }
    addAt(elemento, pos) {
        if (pos < 0 || pos > this.length()) {
            throw new Error("Posição inválida");
        }
        let novoNo = new No(elemento);
        let atual = this.head;
        let index = 0;

        while (index < pos) {
            atual = atual.proximo;
            index++;
        }

        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
    }
    removeAt(pos) {
        if (pos < 0 || pos >= this.length()) {
            throw new Error("Posição inválida");
        }

        let atual = this.head;
        let index = 0;

        while (index < pos) {
            atual = atual.proximo;
            index++;
        }

        let nodeRemovido = atual.proximo;
        atual.proximo = nodeRemovido.proximo;
        return nodeRemovido.dado;
    }
    search(key) { 
        let atual = this.head.proximo;
        let index = 0;

        while (atual !== null) {
            if (atual.dado === key) {
                return true;
            }
            atual = atual.proximo;
            index++;
        }

        return false;
    }
    toString() {
        let result = '';
        let node_b = this.head.proximo;
        while (node_b !== null) {
            result += node_b.dado;
            node_b = node_b.proximo;
        }
        return result;
    }
}

export default Lista;