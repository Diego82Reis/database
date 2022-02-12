export class Pizza {
    id: number = 0;
    nome: string = "";
    foto: string = "";
    descricao: string = "";
    preco: number = 0;

    constructor(id:number, nome:string, foto:string, descricao:string, preco:number){
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.descricao = descricao;
        this.preco = preco;
    }
}