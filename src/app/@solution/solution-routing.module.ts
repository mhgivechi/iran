import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutamationComponent } from './component/automation/automation.component';
import { RugCertificateComponent } from './component/rug-certificate/rug-certificate.component';

const routes: Routes = [
  { path: '', redirectTo: 'automation', pathMatch: 'full' },
  { path: 'automation', component: AutamationComponent, loadChildren: () => import('./component/automation/automation.module').then(m => m.AutomationModule) },
  { path: 'rugcertificate', component: RugCertificateComponent, loadChildren: () => import('./component/rug-certificate/rug-certificate.module').then(m => m.RugCertificateModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionRoutingModule { }