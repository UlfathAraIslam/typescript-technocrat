{
    // access modifiers
    class BankAccount{
       public readonly id: number;
       public name: string;
       private _balance: number;

        constructor(id:number, name: string, balance: number){
            this.id = id;
            this._balance = balance;
            this.name = name;
        }

        addDeposit(amount : number){
            this._balance = this._balance + amount
        }

      private  getBalance(){
            return this._balance;
        }

        getHiddenMethod() {
            return this.getBalance()
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this
        }
    }

    const goribManusherAccount = new BankAccount(111, 'Mr.gorib',30);
    // goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(1);
    // const myBalance = goribManusherAccount.getBalance()
    // console.log(myBalance);

    goribManusherAccount

    // 
}