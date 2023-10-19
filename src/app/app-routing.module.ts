import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenderFormComponent } from './forms/gender-form/gender-form.component';
import { BrandFormComponent } from './forms/brand-form/brand-form.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  
  {path: 'gender/mens', component : GenderFormComponent, data: { gender: 'mens'} },
  {path: 'gender/ladies', component : GenderFormComponent, data: { gender: 'ladies'} },
  {path: 'gender/boys', component : GenderFormComponent, data: { gender: 'boys'} },
  {path: 'gender/girls', component : GenderFormComponent, data: { gender: 'girls'} },
  
  {path: 'brand/Brand A', component : BrandFormComponent, data: { brandName: 'Brand A'} },
  {path: 'brand/Brand B', component : BrandFormComponent, data: { brandName: 'Brand B'} },
  {path: 'brand/Brand C', component : BrandFormComponent, data: { brandName: 'Brand C'} },
  {path: 'brand/Brand D', component : BrandFormComponent, data: { brandName: 'Brand D'} },
  
  {path: 'product/Fleeces', component : ProductFormComponent, data: { productType: 'Fleeces'} },
  {path: 'product/Hoodies', component : ProductFormComponent, data: { productType: 'Hoodies'} },
  {path: 'product/Jackets and Coats', component : ProductFormComponent, data: { productType: 'Jackets and Coats'} },
  {path: 'product/Jeans', component : ProductFormComponent, data: { productType: 'Jeans'} },
  {path: 'product/Polo Shirts', component : ProductFormComponent, data: { productType: 'Polo Shirts'} },
  {path: 'product/Shirts', component : ProductFormComponent, data: { productType: 'Shirts'} },
  {path: 'product/Shoes', component : ProductFormComponent, data: { productType: 'Shoes'} },
  {path: 'product/Sweatshirts', component : ProductFormComponent, data: { productType: 'Sweatshirts'} },
  {path: 'product/Tracksuit Bottoms', component : ProductFormComponent, data: { productType: 'Tracksuit Bottoms'} },
  {path: 'product/Tracksuits', component : ProductFormComponent, data: { productType: 'Tracksuits'} },
  {path: 'product/Trousers', component : ProductFormComponent, data: { productType: 'Trousers'} },
  {path: 'product/T-Shirts', component : ProductFormComponent, data: { productType: 'T-Shirts'} },
  {path: 'product/Dresses & Skirts', component : ProductFormComponent, data: { productType: 'Dresses & Skirts'} },
  {path: 'product/Leggings & Tights', component : ProductFormComponent, data: { productType: 'Leggings & Tights'} },
  
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
