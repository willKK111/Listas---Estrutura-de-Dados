class Pilha {
  constructor(size = 10) {
    this.dados = [];
    this.size = size;
    this.topo = 0;
  }
  push(elemento) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.dados[this.topo] = elemento;
    this.topo++;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    this.topo--;
    return this.dados[this.topo];
  }
  top() {
    if (!this.isEmpty()) {
      return this.dados[this.topo - 1];
    }
    return undefined;
  }
  isEmpty() {
    return this.length() === 0;
  }
  isFull() {
    return this.length() === this.size;
  }
  toString() {
    return this.dados.join("");
  }
  clear() {
    this.topo = 0;
  }
  length() {
    return this.topo;
  }

  // essa adição a pilha é pra ver o tamanho da pilha que pode ter sido alterado ao ser inicializada
  tam() {
    return this.size;
  }
}
export default Pilha;
