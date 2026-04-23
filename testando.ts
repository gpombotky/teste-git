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
  latir(){
    console.log("Au au AU au!!");
  }
  dormir(tempo: number){
    console.log(`dormindo... por {$tempo} segundos...`);
  }
}


const rex = new cachorro();