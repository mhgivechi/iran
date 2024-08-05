import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationRoutingModule } from './automation.routing.module';
import { AutamationComponent } from './automation.component';
import { UserComponent } from '../automation/users/user.component';
import { UserFormComponent } from '../automation/users/user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { AutomationLayoutComponent } from '../../layout/automation-layout/automation-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AutamationComponent,
    UserComponent,
    UserFormComponent,
    AutomationLayoutComponent
  ],
  imports: [
    CommonModule,
    AutomationRoutingModule,
    RouterModule ,
    NgbModule 
  ]
})
export class AutomationModule { }