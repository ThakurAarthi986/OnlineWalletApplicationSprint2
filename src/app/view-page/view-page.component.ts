import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  data: any;
  user_Id:number;
  constructor(private customerservice: CustomerServiceService, private routing:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
    let user=this.routing.snapshot.paramMap.get('user_Id');
    this.user_Id=Number(user); /** snapshot returns string */
    console.log(this.user_Id);
  }

DisplayBalance(): void{
  console.log(this.user_Id)
  this.router.navigate(['/display-balance',this.user_Id]);
}

AddAmount(): void{
  console.log(this.user_Id)
  this.router.navigate(['/add-amount',this.user_Id]);

}
TransferAmount(): void{
  console.log(this.user_Id)
  this.router.navigate(['/transfer-amount',this.user_Id]);

}
}