import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
accountName="HDFC";
bankName="";
headOff="";
noOfBranches="0";
TotalBal="0";
expetedGrowthRate="0";
noOfCustomer="0";

registerBank(){
  let requestbody = {
    accountName : this.accountName,
    bankName : this.bankName,
    headOff : this.headOff,
    noOfBranches : this.noOfBranches,
    TotalBal : this.TotalBal,
    expetedGrowthRate : this.expetedGrowthRate,
    noOfCustomer : this.noOfCustomer
 } 
console.log(requestbody)
 
}





}
