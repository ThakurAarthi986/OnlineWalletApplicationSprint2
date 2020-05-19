import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletAccount, WalletUser } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
msg: string;
 user:WalletUser;
response:any;
userSend:WalletAccount=new WalletAccount(0,0,'',{ user_Id: 0, user_Name: "", password: "", phone_Number: 0, login_Name:""},[{ transactionId: 0, description:"", dateOfTransaction:"", amount:0 , accountBalance: 0 }])
  constructor(private customerservice: CustomerServiceService, private router: Router) { }
  ngOnInit(): void {
  }
    onSubmit(user:WalletUser){
      let lowerCaseLetters = /[a-z]/g;
      let upperCaseLetters = /[A-Z]/g;
      let numbers = /[0-9]/g;
      let phnm=/[6-9]/g;
      let spc="@!`#$%^&*()+=-[]',./{}:<>?~_";
      let h=0;
      for(let i=0;i<user.password.length;i++){
        for(let j=0;j<spc.length;j++)
        if(spc[j]==user.password[i]){
          h=1;
          break;
        }
      }
      if(user.user_Name.length>=5 && user.user_Name.length<=10){
        if(user.password.match(lowerCaseLetters) && user.password.match(upperCaseLetters) && h==1 && user.password.match(numbers) && user.password.length>=6 && user.password.length<=10){
          if(user.phone_Number!=0){
            if(user.phone_Number[0].match(phnm) && user.phone_Number<10000000000){
          if(user.login_Name.length>=6 && user.login_Name.length<=10){
      console.log("user"+user)
      console.log(user.user_Name)
      this.userSend.walletUser=user
    
      console.log(this.userSend)
      this.customerservice.createAccount(this.userSend)
          .subscribe(data => 
                {
            console.log(data)
            if(data!=null)
            {
                alert("Account created successfully, your user-id is: "+data.walletUser.user_Id+" please note it for future purpose"); 
                this.router.navigate(['view-page',data.walletUser.user_Id]);
              }  
            else{
             alert("error");
                }
              } );
            }
            else{
              alert("LoginName must be of 6-10 characters");
                 this.router.navigate(['create-account']);
            }
          }
              else{
                alert("Enter a valid Phone Number");
                 this.router.navigate(['create-account']);
                    }
              }
            else{
              alert("Enter a valid Phone Number");
               this.router.navigate(['create-account']);
                  }
              }
          
          else{
            alert("Password must contain a lower-case, an upper-case, a number,a special character and must be atleast 6 charactes");
            this.router.navigate(['create-account']);
          }
        }
        else{
          alert("UserName must be of 5-10 characters");
            this.router.navigate(['create-account']);
        }
      }
      oncap(event:any):string{
        let st=event.target.value;
        event.target.value=st.replace(/^./,st[0].toUpperCase());
        return event.target.value;
      
      }

  }