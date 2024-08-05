import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../automation/users/user.component';
import { UserFormComponent } from '../automation/users/user-form/user-form.component';
import { AutomationLayoutComponent } from '../../layout/automation-layout/automation-layout.component';
const routes: Routes = [
  {
    path: '',
    component: AutomationLayoutComponent,
    children: [
      { path: '', redirectTo: '/automation/user', pathMatch: 'full' },
      { path: 'automation/user', component: UserComponent },
      { path: 'automation/user-form', component: UserFormComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomationRoutingModule { }