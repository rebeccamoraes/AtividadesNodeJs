export class Conta {
    protected _agencia: string;
    protected _numero: string;
    protected _saldo: number;
    protected _cliente: string;

    get agencia(): string {
        return this._agencia;
    }
    set agencia(agencia: string) {
        this._agencia = agencia;
    }

    get numero(): string {
        return this._numero;
    }
    set numero(numero: string) {
        this._numero = numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    get cliente(): string {
        return this._cliente;
    }
    set cliente(cliente: string) {
        this._cliente = cliente;
    }
    
    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    saque(valor: number): string {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return 'saque realizado';
        }
        return 'saldo insuficiente';
    }

}
