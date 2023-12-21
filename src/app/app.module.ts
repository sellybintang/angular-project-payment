import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from "./app.component";
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";
import { PaymentDetailFormComponent } from "./payment-details/payment-detail-form/payment-detail-form.component";

// coba
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        AppComponent,
        PaymentDetailFormComponent,
        PaymentDetailsComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        CommonModule, 
        RouterOutlet,
        FormsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
          }),
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}
