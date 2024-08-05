import { NgModule } from "@angular/core";
import { SolutionComponent } from './solution.component';
import { SolutionRoutingModule } from './solution-routing.module';
import { DataService } from "./services/common/data.service";

const SOLUTION_COMPONENTS = [
    SolutionComponent,
];
@NgModule({
    imports: [
        SolutionRoutingModule,
    ],
    declarations: [
        SolutionComponent,
    ],
    providers: [
        DataService
    ],
  
    bootstrap: [SolutionComponent]
})
export class SolutionModule {
}