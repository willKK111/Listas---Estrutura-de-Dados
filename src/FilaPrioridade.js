import NodePrioridade from "./NoPrioridade";

class FilaPrioridade {
  constructor() {
    this.tree = [];
    this.size = 0;
    this.tree[0] = new NodePrioridade(0, -Infinity); // Sentinela
  }

  inserir(data, priority) {
    this.size++;
    let i = this.size;
    this.tree[i] = new NodePrioridade(data, priority);

    // Subir no heap (heapify-up)
    while (this.tree[Math.floor(i / 2)].priority > this.tree[i].priority) {
      this._trocar(i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }

  remover() {
    if (this.size === 0) {
      return null;
    }

    const minNode = this.tree[1]; // raiz do heap
    this.tree[1] = this.tree[this.size];
    this.size--;
    this._heapify(1);

    return minNode;
  }

  _heapify(i) {
    let menor = i;
    const esq = 2 * i;
    const dir = 2 * i + 1;

    if (
      esq <= this.size &&
      this.tree[esq].priority < this.tree[menor].priority
    ) {
      menor = esq;
    }

    if (
      dir <= this.size &&
      this.tree[dir].priority < this.tree[menor].priority
    ) {
      menor = dir;
    }

    if (menor !== i) {
      this._trocar(i, menor);
      this._heapify(menor);
    }
  }

  _trocar(i, j) {
    const temp = this.tree[i];
    this.tree[i] = this.tree[j];
    this.tree[j] = temp;
  }
}

export default FilaPrioridade;
