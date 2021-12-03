export class Cliente {
    private _id: number;
    private _nome: string;
    private _cpf: string;

    get id():number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }
    set cpf(cpf: string) {
        this._cpf = cpf;
    }
}