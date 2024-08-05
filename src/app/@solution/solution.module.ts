import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionRoutingModule } from './solution-routing.module';
import { SolutionComponent } from './solution.component';
import { AutomationModule } from './component/automation/automation.module';

@NgModule({
  declarations: [SolutionComponent],
  imports: [
    CommonModule,
    SolutionRoutingModule,
    AutomationModule
  ]
})
export class SolutionModule { }