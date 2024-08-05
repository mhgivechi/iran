import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BlockUIModule } from "ng-block-ui";
import { DataService } from "./@solution/services/common/data.service";


@NgModule({
    declarations: [AppComponent],
    imports: [
        
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        //NgbModule,
        BlockUIModule.forRoot(),
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        DataService
    ]
})
export class AppModule {

}
