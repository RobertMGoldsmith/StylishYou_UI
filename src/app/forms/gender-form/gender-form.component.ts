import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'gender-form',
  template: `
    <p>
      gender-form works!
    </p>
    
    <p>{{ gender }}</p>
    
    <form class="gender-form" #form="ngForm">
      <label>
        <span>Product Type</span>
        <select
          name="product"
          ngModel
          #product="ngModel"
        >
          <option *ngFor="let product of products">
            {{ product }}
          </option>
        </select>
      </label>
    </form>
    
   
    
    <a routerLink="home" class="btn">Home</a>
    
    <br>
    {{ form.value | json }}
  `,
  styles: [
  ]
})
export class GenderFormComponent {
  
  gender!: string
  
  // !ALTER gender condition
  products: string[] = [
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

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    // const gender = this.route.snapshot.paramMap.get('gender')
    // console.log(gender)
    
    // 
    this.gender = this.route.snapshot.data['gender']
    console.log(this.route.data)
    console.log(this.gender)
  }
  
  
  
} 
 