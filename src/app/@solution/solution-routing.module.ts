import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutamationComponent } from './component/automation/automation.component';

const routes: Routes = [
  { path: '', redirectTo: 'automation', pathMatch: 'full' },
  { path: 'automation', component: AutamationComponent, loadChildren: () => import('./component/automation/automation.module').then(m => m.AutomationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule { }