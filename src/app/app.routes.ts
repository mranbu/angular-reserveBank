import { Routes } from '@angular/router';
import { CreateAccountComponent} from './account/create-account/create-account.component';
import { AdminAccountComponent} from './account/admin-account/admin-account.component';
import { ViewAccountComponent} from './account/view-account/view-account.component';
import { CloseAccountComponent} from './account/close-account/close-account.component';
import { Component } from '@angular/core';
import { AdminRuleComponent} from './bank-rules/admin-rule/admin-rule.component';
import { DefineRuleComponent} from './bank-rules/define-rule/define-rule.component';
import { AdminLoanComponent} from './loan/admin-loan/admin-loan.component';
import { ApplyLoanComponent} from './loan/apply-loan/apply-loan.component';
import { PayLoanComponent } from './loan/pay-loan/pay-loan.component';
import { ViewLoanComponent } from './loan/view-loan/view-loan.component';
import { RupeeAdminComponent } from './rupee/rupee-admin/rupee-admin.component';
import { RupeeRequestComponent } from './rupee/rupee-request/rupee-request.component';

export const routes : Routes=[
    { path:'createAcc', component:CreateAccountComponent},
    { path:'adminAcc' , component:AdminAccountComponent},
    { path:'viewAcc', component:ViewAccountComponent},
    { path: 'closeacc', component:CloseAccountComponent},
    {path:'defineRule', component:DefineRuleComponent},
    {path:'AdminRule', component:AdminRuleComponent},
    {path:'applyLoan', component:ApplyLoanComponent},
    {path:'adminLoan', component:AdminLoanComponent},
    {path:'payLoan', component:PayLoanComponent},
    {path:'viewLoan', component:ViewLoanComponent},
    {path:'rupeeAdmin', component:RupeeAdminComponent},
    {path:'rupeeReq', component:RupeeRequestComponent}
];





