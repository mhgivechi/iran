import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RugComponent } from '../rug-certificate/rugs/rugs.component';

const routes: Routes = [
  { path: '', redirectTo: '/rugcertificate/rug', pathMatch: 'full' },
  { path: 'rugcertificate/rug', component: RugComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RugCertificateRoutingModule { }