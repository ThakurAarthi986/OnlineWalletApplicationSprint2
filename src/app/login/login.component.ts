import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletUser } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user_Id: number;
  password: string;
  details: any;
  
    constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

    


onSubmit(user:WalletUser){
  console.log(user.user_Id,user.password);
    this.user_Id=user.user_Id;
    this.customerservice.validateUser(user.user_Id,user.password).subscribe(
    (data)=>{
      this.details =data
      console.log("returened "+this.details)
    if (this.details == "Please Enter Valid Login Detailsh User_Id/n if you don't have an account please register below") {
           alert("Ooops..! Invalid username/password *try again or please register below");
     }
     else {
      alert("Login Successfull");
       console.log(this.user_Id)
       this.router.navigate(['view-page',this.user_Id]);
       } 
    }
    );
  } 
}