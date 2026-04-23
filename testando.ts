console.log("Ola mundo!");

class cachorro {
  private nome: string;
  private idade: number;

  constructor() {
    this.nome = "";
    this.idade = 0;
  }

  definir(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  getNome(): string {
    return this.nome;
  }
}


const rex = new cachorro();