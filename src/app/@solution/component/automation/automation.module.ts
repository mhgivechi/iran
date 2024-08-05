import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationRoutingModule } from './automation.routing.module';
import { AutamationComponent } from './automation.component';
import { UserComponent } from '../automation/users/user.component';
import { UserFormComponent } from '../automation/users/user-form/user-form.component';

@NgModule({
  declarations: [
    AutamationComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    AutomationRoutingModule
  ]
})
export class AutomationModule { }