import Pilha from "../src/Pilha";

class PilhaDePratos {
  constructor(size = 3) {
    this.size = size;
    this.pilhas = [];
  }

  empilha(elemento) {
    if (
      this.pilhas.length === 0 ||
      this.pilhas[this.pilhas.length - 1].tam() === this.size
    ) {
      const novaPilha = new Pilha();
      novaPilha.push(elemento);
      this.pilhas.push(novaPilha);
    } else {
      this.pilhas[this.pilhas.length - 1].push(elemento);
    }
  }

  desempilha() {
    if (this.pilhas.length === 0 || this.pilhas[0].isEmpty()) {
      return null;
    }
    let prato = this.pilhas[this.pilhas.length - 1].pop();
    if (this.pilhas[this.pilhas.length - 1].isEmpty()) {
      this.pilhas.pop();
    }

    return prato;
  }
}

export default PilhaDePratos;
