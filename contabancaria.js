class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this.saldo = saldo; 
  
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log('Saldo insuficiente!');
      } else {
        this.saldo -= valor;
        console.log(`Saque realizado com sucesso. Saldo atual: R$${this.saldo}`);
      }
    }
  
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito realizado com sucesso. Saldo atual: R$${this.saldo}`);
      } else {
        console.log('Valor de depósito inválido.');
      }
    }
  }
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
      super(agencia, numero, "conta corrente", saldo);
      this.cartaoCredito = cartaoCredito; 
  
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, "conta poupança", saldo);
    }
  }
  
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, "conta universitária", 
   saldo);
    }
  
    sacar(valor) {
      if (valor > 500) 
   {
        console.log("Saque em contas universitárias limitado a R$500,00.");
      } else {
        super.sacar(valor);
      }
    }
  }
  
const minhaContaCorrente = new ContaCorrente(123, 456, 1000, "1234567890");
minhaContaCorrente.sacar(1700);


const minhaContaUniversitaria = new ContaUniversitaria(789, 1011, 500);
minhaContaUniversitaria.sacar(800);