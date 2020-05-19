import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
private headers = new HttpHeaders({'Content-Type': 'application/json'});
//private headers = new HttpHeaders({'Content-Type': 'text/plain'});


    public createAccount(user: WalletAccount) {
      console.log(user+"inservice");
      return this.http.post<WalletAccount>("http://localhost:2020/Wallet/createAccount", user,{responseType:'json'});
   }

   public addAmount(user_Id: number, accountbalance: number) {
    console.log(user_Id, accountbalance);
    return this.http.put<WalletAccount>(`http://localhost:2021/Wallet/addAmount/${user_Id}/${accountbalance}`,{headers: this.headers});
 }


   public displayBalance(user: number) {
    console.log(user);
    return this.http.get("http://localhost:2022/Wallet/displayBalance/"+ user, {responseType:'text'});
  }
  public transferAmount( amount: number,userid1: number, userid2: number) {
    console.log(amount, userid1, userid2,);
   const headers = new HttpHeaders({'Content-Type': 'text/plain'});
    return this.http.put("http://localhost:2023/Wallet/transferAmount/"+amount+"/"+userid1+"/"+userid2,{responseType:'text'});
  }

  public validateUser(user_Id: number, password: string) {
    console.log(user_Id, password);
    return this.http.get("http://localhost:2024/Wallet/validateUser/"+ user_Id+"/"+ password,{responseType:'text'});
  }

}

export class WalletUser
{
  user_Id:number;
  user_Name:string;
  password:string;
  phone_Number:number;
  login_Name:string;

  constructor(user_Id:number, user_Name:string, password:string, phone_Number: number, login_Name: string)
  {
    this.user_Id=user_Id;
    this.user_Name=user_Name;
    this.password=password;
    this.phone_Number=phone_Number;
    this.login_Name=login_Name;
  }
}

export class WalletAccount
{
  accountId:number;
    accountBalance: number;
  status:string;
  walletUser:WalletUser;//one to one
WalletTransactions: WalletTransactions[];//one to many
  constructor(accountId:number, accountBalance:number, status: string, walletUser:WalletUser, WalletTransactions: WalletTransactions[])
  {

    this.accountId=accountId;
    this.accountBalance=accountBalance;
    this.status=status;
    this.walletUser=walletUser;
    this.WalletTransactions=WalletTransactions;
  }
}
  //<element ng-list="separator"></element>

export class WalletTransactions
{

 transactionId: number;
  description: string;
  dateOfTransaction: string;
  amount:number;
  accountBalance: number ; 


  constructor(transactionId:number, description:string, dateOfTransaction:string, amount: number, accountBalance: number)
  {
    this.transactionId=transactionId;
    this.description=description;
    this.dateOfTransaction=dateOfTransaction;
    this.amount=amount;
    this.accountBalance=accountBalance;
  
  }
}
