import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'brand-form',
  template: `
    <p>
      brand-form works!
    </p>
    <p>
      {{ brandName }}
    </p>
  `,
  styles: [
  ]
})
export class BrandFormComponent {

  brandName!: string | null
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    
    this.brandName = this.route.snapshot.paramMap.get('brandName') 
    console.log(this.brandName)
  }

}
