class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    //Getters e Setters
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    //Metódo para sacar...
    sacar(valor){
       if(valor > this._saldo){
        return "Saldo insuficiente para o saque!!! Deposite um valor para sacar.";
       }else{
        this._saldo = this._saldo - valor; //Usuario informa o valor a ser sacado, subtraimos do saldo em conta.
        return "O valor de" + this._saldo + "Foi sacado";
       }
    }

    //Metódo para sacar...
    depositar(valor){
        isNaN(valor) ? valor = 0 : valor = valor;
        this._saldo = this._saldo + valor;
        return "O valor de " + valor + " foi depositado. " + " O seu saldo atual é de: " + this._saldo;

    }
    
}




class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}



function Main(){
const valoresContaBancaria = new ContaBancaria;
//Depositando valores
console.log(valoresContaBancaria.depositar(988))

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);

}
Main();