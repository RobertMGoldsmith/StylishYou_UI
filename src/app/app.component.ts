import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <router-outlet></router-outlet>
    
    
  `,
  styles: [`
    h1 {
      color: var(--brand-red)
    }
  `]
})
export class AppComponent {
  title = 'StylishYou_UI';
}
  