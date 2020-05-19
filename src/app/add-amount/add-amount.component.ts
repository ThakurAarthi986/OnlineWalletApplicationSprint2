import { Component, OnInit } from '@angular/core';
import { CustomerServiceService} from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {
  
accountNo: number;
    
       accBal:number;
   
       result: any;

  constructor(private customerservice: CustomerServiceService, private routing:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
msg:string;
  addAmount():void{
   // retriving userdata from login page 
let user=this.routing.snapshot.paramMap.get('user_Id');
let user_Id=Number(user); /** snapshot returns string */
    console.log(user_Id);
    if(this.accBal==null||this.accBal<=100)
{
  alert("Please enter the balance to add (Minimum : Rs 100/-)");
}   
else{
  this.customerservice.addAmount(user_Id,this.accBal)
    .subscribe(response => {
      if(response!=null)
        this.msg="Amount Added Successfully!!\n Your Balance : "+response;
    });
           this.router.navigate(['add-amount',user_Id]);
  }
}
}




