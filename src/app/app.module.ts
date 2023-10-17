import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenderFormComponent } from './forms/gender-form/gender-form.component';
import { BrandFormComponent } from './forms/brand-form/brand-form.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';
import { GenderResultsComponent } from './results/gender-results/gender-results.component';
import { ProductResultsComponent } from './results/product-results/product-results.component';
import { BrandResultsComponent } from './results/brand-results/brand-results.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenderFormComponent,
    BrandFormComponent,
    ProductFormComponent,
    GenderResultsComponent,
    ProductResultsComponent,
    BrandResultsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
