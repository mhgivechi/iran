import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';
import {RugCertificateModule  } from './component/rug-certificate/rug-certificate.module';
import {AutomationModule  } from './component/automation/automation.module';
import { AutomationLayoutComponent } from './layout/automation-layout/automation-layout.component';

@NgModule({
  declarations: [SolutionComponent],
  imports: [
    CommonModule,
    SolutionRoutingModule,
    AutomationModule,
    RugCertificateModule,
  ]
})
export class SolutionModule { }