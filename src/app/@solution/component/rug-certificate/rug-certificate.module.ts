import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RugCertificateRoutingModule } from './rug-certificate.routing.module';
import { RugCertificateComponent } from './rug-certificate.component';
import { RugComponent } from '../rug-certificate/rugs/rugs.component';

@NgModule({
  declarations: [
    RugCertificateComponent,
    RugComponent,
  ],
  imports: [
    CommonModule,
    RugCertificateRoutingModule
  ]
})
export class RugCertificateModule { }