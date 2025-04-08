
class Deque {
    constructor(size = 5) {
        this.dados = [];
        this.size = size;
        this.inicio = 0;
        this.fim = 0;
    }

    addFront(elemento) {
        if (this.isFull()) throw new Error("Deque overflow");
        if (this.inicio === 0) {
            this.inicio = this.size - 1;
        } else {
            this.inicio--;
        }
        this.dados[this.inicio] = elemento;
    }

    addBack(elemento) {
        if (this.isFull()) throw new Error("Deque overflow");
        this.dados[this.fim] = elemento;
        if (this.fim === this.size - 1) {
            this.fim = 0;
        } else {
            this.fim++;
        }
    }

    removeFront() {
        if (this.isEmpty()) throw new Error("Deque underflow");
        const elemento = this.dados[this.inicio];
        if (this.inicio === this.size - 1) {
            this.inicio = 0;
        } else {
            this.inicio++;
        }
        return elemento;
    }

    removeBack() {
        if (this.isEmpty()) throw new Error("Deque underflow");
        if (this.fim === 0) {
            this.fim = this.size - 1;
        } else {
            this.fim--;
        }
        return this.dados[this.fim];
    }

    front() {
        if (!this.isEmpty()) return this.dados[this.inicio];
    }

    back() {
        if (!this.isEmpty()) {
            if (this.fim === 0) {
                return this.dados[this.size - 1];
            } else {
                return this.dados[this.fim - 1];
            }
        }
    }

    length() {
        if (this.isEmpty()) return 0;
        if (this.inicio < this.fim) {
            return this.fim - this.inicio;
        }
        return ((this.size - this.inicio) + this.fim);
    }

    isEmpty() {
        return this.inicio === this.fim;
    }

    isFull() {
        return this.length() === this.size;
    }

    clear() {
        this.inicio = 0;
        this.fim = 0;
    }

    tam() {
        return this.size;
    }

    
    toString() { }
}

export default Deque;
