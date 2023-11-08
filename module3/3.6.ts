{
    // getter and setter

    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;
 
         constructor(id:number, name: string, balance: number){
             this.id = id;
             this._balance = balance;
             this.name = name;
         }

        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }
 
        //  addDeposit(amount : number){
        //      this._balance = this._balance + amount
        //  }

        // getter
        get Balance() {
            return this._balance;
        } 


        //  getBalance(){
        //      return this._balance;
        //  }
     }
     
 
     const goribManusherAccount = new BankAccount(111, 'Mr.gorib',30);
    
    //  goribManusherAccount.balance = 0;
    //  goribManusherAccount.addDeposit(1); // calling function

    goribManusherAccount.deposit = 50;
     
    //  const myBalance = goribManusherAccount.getBalance() //calling function

    const myBalance = goribManusherAccount.Balance; //property er mto kore
     console.log(myBalance);
    // 
}