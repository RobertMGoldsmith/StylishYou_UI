import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="container-fluid bg-primary">
     <img src="/assets/StylishYou_Logo_Main.png" alt=""> 
    </div>
    
    <a routerLink="../gender/men" class="btn">Mens</a>
    <a routerLink="../gender/ladies" class="btn">Ladies</a>
    
    <!-- <a [routerlink]="">Ladies</a> -->
    <!-- <a [routerlink]="">Boys</a> -->
    <!-- <a [routerlink]="">Girls</a> -->
  `,
  styles: [
  ]
})
export class HomeComponent {

}
