import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddAmountComponent } from './add-amount/add-amount.component';
import { DisplayBalanceComponent } from './display-balance/display-balance.component';
import { TransferAmountComponent } from './transfer-amount/transfer-amount.component';
import { LoginComponent } from './login/login.component';
import { ViewPageComponent } from './view-page/view-page.component';


const routes: Routes = [
  { path: 'create-account',component: CreateAccountComponent},
  { path: 'add-amount/:user_Id', component: AddAmountComponent },
   {path:'display-balance/:user_Id',component:DisplayBalanceComponent},
   {path:'transfer-amount/:user_Id',component:TransferAmountComponent},
   {path:'',component:LoginComponent},
   {path:'view-page/:user_Id',component:ViewPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
