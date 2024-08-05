import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionModule } from './@solution/solution.module';
import { BlockUIModule } from 'ng-block-ui';
import { DataService } from './@solution/services/common/data.service'; // Import the service

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SolutionModule,
    BlockUIModule.forRoot()
  ],
  providers: [DataService], // Add DataService here
  bootstrap: [AppComponent]
})
export class AppModule { }