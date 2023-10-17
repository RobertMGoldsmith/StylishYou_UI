import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
                <option>
                  Select product:
                </option>
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
              <!-- Use clothes sizes (eg. S,M,L) unless 'Shoes' 
                   are selected from the above option -->
              <ng-container *ngIf="form.value.product !== 'Shoes' else shoeSizeSelect">
                <option>
                  Select size:
                </option>
                <option *ngFor="let size of clothesSizes">
                  {{ size }}
                </option>
              </ng-container>
              
              <ng-template #shoeSizeSelect>
                <option>
                  Select size:
                </option>
                <option *ngFor="let size of shoeSizes">
                  {{ size }}
                </option>
              </ng-template>
  
              </select>
            </label>
            
            <label class="form-label" for="colour">
              <span>Colour</span>
              <select
                id="colour"
                class="form-select"
                name="colour"
                ngModel
                #product="ngModel"
              >
                <option>
                  Select colour:
                </option>
                <option *ngFor="let colour of colours">
                  {{ colour }}
                </option>
              </select>
            </label>
            
            <div class="row">
              <label class="form-label col" for="priceMin">
                <span>Price Min</span>
                <input type="number" id="priceMin" class="form-control" min="0" max="5000" name="priceMin" ngModel #priceMin>
              </label>
              
              <label class="form-label col" for="priceMax">
                <span>Price Max</span>
                <input type="number" id="priceMax" class="form-control" min="0" max="5000" name="priceMax" ngModel #priceMax>
              </label>
            </div>
            
            
            <label class="form-label" for="brand">
              <span>Brand</span>
              <select
                id="brand"
                class="form-select"
                name="brand"
                ngModel
                #product="ngModel"
              >
                <option>
                  Select brand:
                </option>
                <option *ngFor="let brand of brands ">
                  {{ brand }}
                </option>
              </select>
            </label>
            
            <div class="mt-3">
              <button type="submit" class="btn-find">Find</button>
            </div>
            
            
            
          </form>
        </div>
      </div>
      
      
      <br>
       {{ form.value | json }}
    </div>
    <!-- end of main container -->

    <div class="container">
      <div class="row">
        <a routerLink="home" class="btn-home">Home</a>
      </div>
    </div>
              
   
    
    <!-- results -->
    
   
    
    
    

    
 
  `,
  styles: [
  ]
})
export class GenderFormComponent {
  
  gender!: string
  
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
  
  colours: string[] = [
    'Beige',
    'Black',
    'Blue',
    'Green',
    'Grey',
    'Multi',
    'Orange',
    'Pink',
    'Purple',
    'Red',
    'Silver',
    'White',
    'Yellow',
    'Gold'
  ]
  
  brands: string[] = [
    'Brand A',
    'Brand B',
    'Brand C',
    'Brand D'
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
 