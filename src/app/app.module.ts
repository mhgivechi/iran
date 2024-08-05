import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolutionModule } from './@solution/solution.module';
import { BlockUIModule } from 'ng-block-ui';
import { DataService } from './@solution/services/common/data.service'; // Import the service
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SolutionModule,
    BlockUIModule.forRoot(),
    
  ],
  providers: [DataService,provideHttpClient(withInterceptorsFromDi())], // Add DataService here
  bootstrap: [AppComponent]
})
export class AppModule { }