import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
  
    <!-- banner -->
    <div class="container-fluid banner-main">
      <div class="container">
        <img src="/assets/StylishYou_Logo_Main.png" alt="Stylish You Main" class="logo"> 
      </div>
    </div>
    
    
    <div class="container py-5">
      <!-- gender links -->
      <div class="row gx-4 gy-4">
        
        <div class="col-6 col-md-3 ">
          <a routerLink="../gender/mens" class="nav-link-gender">Mens</a>
        </div>
        
        <div class="col-6 col-md-3 "> 
          <a routerLink="../gender/ladies" class="nav-link-gender">Ladies</a>
        </div>

        <div class="col-6 col-md-3 "> 
          <a routerLink="../gender/boys" class="nav-link-gender">Boys</a> 
        </div>
        
        <div class="col-6 col-md-3 "> 
            <a routerLink="../gender/girls" class="nav-link-gender">Girls</a>
        </div>  
      </div>
      
      <hr class="mt-5">
      
      <!-- Brand Links -->
      <div class="brand-links">
        <a routerLink="../brand/Brand A" class="nav-link-brand">Brand A</a>
        <a routerLink="../brand/Brand B" class="nav-link-brand">Brand B</a>
        <a routerLink="../brand/Brand C" class="nav-link-brand">Brand C</a>
        <a routerLink="../brand/Brand D" class="nav-link-brand">Brand D</a>
      </div>
      
      <hr class="mt-5">
      
      <!-- Product Links -->
      <div class="product-links">
        <a routerLink="../product/Fleeces" class="nav-link-product">Fleeces</a>
        <a routerLink="../product/Hoodies" class="nav-link-product">Hoodies</a>
        <a routerLink="../product/Jackets and Coats" class="nav-link-product">Jackets and Coats</a>
        <a routerLink="../product/Jeans" class="nav-link-product">Jeans</a>
        <a routerLink="../product/Polo Shirts" class="nav-link-product">Polo Shirts</a>
        <a routerLink="../product/Shirts" class="nav-link-product">Shirts</a>
        <a routerLink="../product/Shoes" class="nav-link-product">Shoes</a>
        <a routerLink="../product/Shorts" class="nav-link-product">Shorts</a>
        <a routerLink="../product/Sweatshirts" class="nav-link-product">Sweatshirts</a>
        <a routerLink="../product/Tracksuit Bottoms" class="nav-link-product">Tracksuit Bottoms</a>
        <a routerLink="../product/Tracksuits" class="nav-link-product">Tracksuits</a>
        <a routerLink="../product/Trousers" class="nav-link-product">Trousers</a>
        <a routerLink="../product/T-Shirts" class="nav-link-product">T-Shirts</a>
        <a routerLink="../product/Dresses & Skirts" class="nav-link-product">Dresses & Skirts</a>
        <a routerLink="../product/Leggings & Tights" class="nav-link-product">Leggings & Tights</a>
      </div>
      
    </div>
    <!--  end of container -->
  `,
  styles: [
  ]
})
export class HomeComponent {

  
  constructor(){}
 
   
}
