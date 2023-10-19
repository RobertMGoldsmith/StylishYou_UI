import { Component } from '@angular/core';
import { StaticDataService } from 'src/app/services/static-data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'brand-form',
  template: `
   <!-- banner -->
   <div class="container-fluid banner-main">
      <div class="container">
        <div class="row">
          <div class="col" [ngSwitch]="brandName">
            <img src="/assets/StylishYou_Logo_Main.png" alt="Stylish You" class="col align-self-start logo"> 
          </div>
          <div class="col align-self-end banner-text">
            <h1>{{ brandName | titlecase }}</h1>
          </div>
        </div>
      </div>
    </div>
    
    <!-- main -->
    <div class="container my-4" *ngIf="!showResultsState">
      <div class="row">
        <div class="col-md-8 col-12">
          <!-- form -->
          <form class="form brandName-form" #form="ngForm" (ngSubmit)="submitForm(form)">
            
            <label class="form-label" for="gender">
              <span>Gender</span>
              <select
                id="gender"
                class="form-select"
                name="gender"
                required
                pattern="^(?!Select).*?(?<!:)$"
                ngModel
                #gender="ngModel"
              >
                <option>
                  Select gender:
                </option>
                <option *ngFor="let gender of staticData.genders ">
                  {{ gender }}
                </option>
              </select>
              <ng-container *ngIf="gender.invalid && gender.touched">
                <small class="form-validation-error" *ngIf="gender.errors?.['required']">
                  Gender is required
                </small>
                <small class="form-validation-error" *ngIf="gender.errors?.['pattern']">
                  Please select a gender
                </small>
              </ng-container>
            </label>
          
            <label class="form-label" for="product">
              <span>Product Type</span>
              <select
                id="productType"
                class="form-select"
                name="productType"
                required
                pattern="^(?!Select).*?(?<!:)$"
                ngModel
                #productType="ngModel"
              >
                <!-- omit female product type if gender 'Mens' or 'Boys' -->
                <ng-container *ngIf="form.value.gender === 'Mens' || form.value.gender === 'Boys' else femaleProductSelect">
                  <option>
                    Select product:
                  </option>
                  <option *ngFor="let product of maleOnlyProducts">
                    {{ product }}
                  </option>
                </ng-container>
                
                <ng-template #femaleProductSelect>
                  <option>
                    Select product:
                  </option>
                  <option *ngFor="let product of staticData.allProducts">
                    {{ product }}
                  </option>
                </ng-template>
              </select>
              
              <ng-container *ngIf="productType.invalid && productType.touched">
                <small class="form-validation-error" *ngIf="productType.errors?.['required']">
                  Product type is required
                </small>
                <small class="form-validation-error" *ngIf="productType.errors?.['pattern']">
                  Please select a product
                </small>
              </ng-container>
            </label>
            
            <label class="form-label" for="size">
              <span>Size</span>
              <select
                id="size"
                class="form-select"
                name="size"
                required
                pattern="^(?!Select).*?(?<!:)$"
                ngModel
                #size="ngModel"
              >
              <!-- Use clothes sizes (eg. S,M,L) unless 'Shoes' 
                   are selected from the above option -->
                <ng-container *ngIf="form.value.productType !== 'Shoes' else shoeSizeSelect">
                  <option>
                    Select size:
                  </option>
                  <option *ngFor="let size of staticData.clothesSizes">
                    {{ size }}
                  </option>
                </ng-container>
                
                <ng-template #shoeSizeSelect>
                  <option>
                    Select size:
                  </option>
                  <option *ngFor="let size of staticData.shoeSizes">
                    {{ size }}
                  </option>
                </ng-template>
  
              </select>
              <ng-container *ngIf="size.invalid && size.touched">
                <small class="form-validation-error" *ngIf="size.errors?.['required']">
                  Size is required
                </small>
                <small class="form-validation-error" *ngIf="size.errors?.['pattern']">
                  Please select a size
                </small>
              </ng-container>
            </label>
            
            <label class="form-label" for="colour">
              <span>Colour</span>
              <select
                id="colour"
                class="form-select"
                name="colour"
                required
                pattern="^(?!Select).*?(?<!:)$"
                ngModel
                #colour="ngModel"
              >
                <option>
                  Select colour:
                </option>
                <option *ngFor="let colour of staticData.colours">
                  {{ colour }}
                </option>
              </select>
              <ng-container *ngIf="colour.invalid && colour.touched">
                <small class="form-validation-error" *ngIf="colour.errors?.['required']">
                  Colour is required
                </small>
                <small class="form-validation-error" *ngIf="colour.errors?.['pattern']">
                  Please select a colour
                </small>
              </ng-container>
            </label>
            
            <div class="row">
              <label class="form-label col" for="priceMin">
                <span>Price Min</span>
                <div class="input-group">
                  <span class="input-group-text">£</span>
                  <input type="number" id="priceMin" class="form-control" 
                         min="0" max="5000" [value]="minPriceNumber" name="priceMin" 
                         required [(ngModel)]="minPriceNumber" #priceMin="ngModel">
                </div>
                <ng-container *ngIf="priceMin.invalid && priceMin.touched">
                  <small class="form-validation-error" *ngIf="priceMin.errors?.['min']">
                    Minimum amount is 0.01
                  </small>
                  <small class="form-validation-error" *ngIf="priceMin.errors?.['max']">
                    Maximum amount is 5000
                  </small>
                  <small class="form-validation-error" *ngIf="priceMin.errors?.['required']">
                    Minimum amount is required
                  </small>
                </ng-container>
                
              </label>
              
              <label class="form-label col" for="priceMax">
                <span>Price Max</span>
                <div class="input-group">
                <span class="input-group-text">£</span>
                  <input type="number" id="priceMax" class="form-control" 
                         min="0" max="5000" [value]="maxPriceNumber" name="priceMax" 
                         required [(ngModel)]="maxPriceNumber" #priceMax="ngModel">
                </div>
                <ng-container *ngIf="priceMax.invalid && priceMax.touched">
                  <small class="form-validation-error" *ngIf="priceMax.errors?.['min']">
                    Minimum amount is 0.01
                  </small>
                  <small class="form-validation-error" *ngIf="priceMax.errors?.['max']">
                    Maximum amount is 5000
                  </small>
                  <small class="form-validation-error" *ngIf="priceMax.errors?.['required']">
                    Minimum amount is required
                  </small>
                </ng-container>
              </label>
              <ng-container *ngIf="maxPriceNumber < minPriceNumber">
                <small class="form-validation-error">
                  The maximum price cannot be smaller than the minimum price
                </small>
              </ng-container>
            </div>       
            
            <div class="mt-3">
              <button type="submit" class="btn-find" [disabled]="maxPriceNumber < minPriceNumber">
                Find
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end of main container -->
    
    <!-- results -->
    <div class="container mt-3 results"  *ngIf="showResultsState">
      <div class="row">
        <p>SQL Query String:</p>
        <pre>
          <code>{{ queryString }}</code>
        </pre>
        
      </div>
      <hr>
      <div class="row">
        <p>Proposed SQL Stored Procedure:</p>
        <pre>
          <code>
          CREATE procedure [dbo].[searchBrand]

          @brand NVARCHAR(255),
          @gender NVARCHAR(10)
          @product_type NVARCHAR(255),
          @size NVARCHAR(5),
          @colour NVARCHAR(55),
          @min_price Decimal(6,2),
          @max_price Decimal(6,2)

          AS

          SELECT

          op.product_description,
          op.quantity,
          CASE WHEN op.quantity = 0 THEN 'N' ELSE 'Y' AS Available_in_Store

          FROM [dbo].[our_products] op

          WHERE 

          op.brand = @brand 
          AND op.gender = @gender
          AND op.productType = @product_type
          AND op.size = @size 
          AND op.colour = @colour 
          AND op.price = BETWEEN @minPrice AND @max_price 

          </code>
        </pre>
      </div>
    </div>

    <!--  Home & Back Buttons -->
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-8 col-12">
          
          <div class="row">
            
            <div class="col" *ngIf="showResultsState" (click)="toggleResultsState()">
              <button  class="btn-back">
                Back
              </button>
            </div>
            
            <div class="col">
              <button  class="btn-home" routerLink="home" >
                Home
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class BrandFormComponent {

  brandName!: string 
  
  minPriceNumber: number = 10
  maxPriceNumber: number = 1000
  
  maleOnlyProducts: string[] = []
  
  queryString: string = ''
  
  showResultsState: Boolean = false
  
  constructor(
    private route: ActivatedRoute, 
    public staticData: StaticDataService,
  ) {}
  
  ngOnInit() {
    // assign brand from previous link's route data
    this.brandName = this.route.snapshot.data['brandName']
    
    this.maleOnlyProducts = this.removeFromArray(this.staticData.allProducts, this.staticData.femaleOnlyProducts)
  }
  
  // function to remove the contents of one array from another
  removeFromArray(array1: string[], array2: string[]){
    return array1.filter(element => !array2.includes(element))
  }
  
  toggleResultsState() {
    this.showResultsState = !this.showResultsState
  }
  
  submitForm(form: NgForm) {
    // trigger validation errors on inputs not selected
    form.form.markAllAsTouched()
    console.log(form.form.value)
    
    // toggle to results state
    if(form.valid) {
      this.toggleResultsState()
    } 
    
    // create query string
    this.queryString = `
      exec searchBrand @brand= ${this.brandName},
      @gender = ${form.value.gender},
      @product_type = ${form.value.productType},
      @size = ${form.value.size},
      @colour = ${form.value.colour},
      @min_price = ${form.value.priceMin},
      @max_price = ${form.value.priceMax},
    `

  }

}
