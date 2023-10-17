import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-form',
  template: `
    <p>
      product-form works!
    </p>
    <p>
      {{ productName }}
    </p>
  `,
  styles: [
  ]
})
export class ProductFormComponent {

  productName!: string | null
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    
    this.productName = this.route.snapshot.paramMap.get('productName') 
    console.log(this.productName)
  }
}
