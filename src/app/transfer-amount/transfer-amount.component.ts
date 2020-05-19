import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.css']
})
export class TransferAmountComponent implements OnInit {

  acc_id2:number;
    
    amount:number;

    result:any;



  constructor(private customerservice: CustomerServiceService, private routing:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  transferamount() :void{
    // retriving userdata from login page 
let user=this.routing.snapshot.paramMap.get('user_Id');
let user_Id=Number(user); /** snapshot returns string */
    console.log(user_Id);
if(this.amount==0||this.acc_id2==0||this.acc_id2==null||this.amount==null||user_Id==this.acc_id2){ 
  alert("please enter all/valid details");
}else{
    this.customerservice.transferAmount(this.amount,user_Id,this.acc_id2)
    .subscribe(response =>{  
      console.log(response)  
      if(response!=null)
      alert("suscessfull");
            this.result = response;
          
    });

    this.router.navigate(['transfer-amount',user_Id]);
  }

}
} 