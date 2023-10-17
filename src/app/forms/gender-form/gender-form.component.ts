import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'gender-form',
  template: `
  
    <!-- banner -->
    <div *ngIf="gender === 'men'" class="container-fluid banner-men">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="/assets/StylishYou_Logo_Green.png" alt="Stylish You Men" class="col align-self-start logo"> 
          </div>
          <div class="col align-self-end banner-text">
            <h1>Men</h1>
          </div>
        </div>
      </div>
    </div>
    
    <div *ngIf="gender === 'ladies'" class="container-fluid banner-ladies">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="/assets/StylishYou_Logo_Red.png" alt="Stylish You Ladies" class="col align-self-start logo"> 
          </div>
          <div class="col align-self-end banner-text">
            <h1>Ladies</h1>
          </div>
        </div>
      </div>
    </div>
    
    <div *ngIf="gender === 'boys'" class="container-fluid banner-kids">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="/assets/StylishYou_Logo_Orange.png" alt="Stylish You Boys" class="col align-self-start logo"> 
          </div>
          <div class="col align-self-end banner-text">
            <h1>Boys</h1>
          </div>
        </div>
      </div>
    </div>
    
    <div *ngIf="gender === 'girls'" class="container-fluid banner-kids">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="/assets/StylishYou_Logo_Orange.png" alt="Stylish You Girls" class="col align-self-start logo"> 
          </div>
          <div class="col align-self-end banner-text">
            <h1>Girls</h1>
          </div>
        </div>
      </div>
    </div>
    
    <!-- main -->
    <div class="container my-4">
      <div class="row">
        <div class="col-md-8 col-12">
          <!-- form -->
          <form class="form gender-form" #form="ngForm" (ngSubmit)="submitForm()">
            
            <label class="form-label" for="product">
              <span>Product Type</span>
              <select
                id="product"
                class="form-select"
                name="product"
                ngModel
                #product="ngModel"
              >
                <option *ngFor="let product of allProducts">
                  {{ product }}
                </option>
              </select>
            </label>
            
            <label class="form-label" for="size">
              <span>Size</span>
              <select
                id="size"
                class="form-select"
                name="size"
                ngModel
                #product="ngModel"
              >
                <option *ngFor="let size of clothesSizes">
                  {{ size }}
                </option>
              </select>
            </label>
            
            
            <button type="submit" class="btn-primary">Find</button>
          </form>
        </div>
      </div>
      
      
      <br>
       {{ form.value | json }}
    </div>
    <!-- end of main container -->

   

    
    <p>{{ gender }}</p>
    
   
    
    <!-- results -->
    
   
    
    <a routerLink="home" class="btn">Home</a>
    
    <br>
    
 
  `,
  styles: [
  ]
})
export class GenderFormComponent {
  
  gender!: string
  formData!: string
  
  // !ALTER gender condition
  allProducts: string[] = [
    'Fleeces',
    'Hoodies',
    'Jackets and Coats',
    'Jeans',
    'Polo Shirts',
    'Shirts',
    'Shoes',
    'Shorts',
    'Sweatshirts',
    'Tracksuit Bottoms',
    'Tracksuits',
    'Trousers',
    'T-Shirts',
    'Dresses & Skirts',
    'Leggings & Tights'
  ]
  
  femaleOnlyProducts: string[] = [
    'Dresses & Skirts',
    'Leggings & Tights'
  ]
  
  clothesSizes: string[] = [
    'S', 'M', 'L', 'XL', 'XXL' 
  ]
  
  shoeSizes: string[] = [
    '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '12', '13'
  ]

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    // assign gender from previous link's route data
    // Logos, colour schemes and form options will be conditional bases on the selected gender
    this.gender = this.route.snapshot.data['gender']
    console.log(this.route.data)
    console.log(this.gender)
    
    // remove female clothing products if gender is Men or Boys
    if(this.gender === 'men' || this.gender === 'boys'){
      this.allProducts = this.removeFromArray(this.allProducts, this.femaleOnlyProducts)
    }
    
    
  }
  
  removeFromArray(array1: string[], array2: string[]){
    return array1.filter(element => !array2.includes(element))
  }
  
  submitForm() {

    
  }
  
} 
 