import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionComponent } from './@solution/solution.component';

const routes: Routes = [
  { path: '', redirectTo: 'solution', pathMatch: 'full' },
  { path: 'solution', component: SolutionComponent, loadChildren: () => import('./@solution/solution.module').then(m => m.SolutionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }