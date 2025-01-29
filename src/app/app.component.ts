import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router, RouterModule,RouterOutlet, } from '@angular/router';
import { CreateAccountComponent } from "./account/create-account/create-account.component";
import { AdminAccountComponent } from "./account/admin-account/admin-account.component";
import { CloseAccountComponent } from "./account/close-account/close-account.component";
import { FormsModule } from '@angular/forms';
import { ViewAccountComponent } from './account/view-account/view-account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CreateAccountComponent,RouterModule, FormsModule,AdminAccountComponent, CloseAccountComponent,ViewAccountComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title :string = 'resever-bank';
}
