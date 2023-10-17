import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenderFormComponent } from './forms/gender-form/gender-form.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  
  {path: 'gender/men', component : GenderFormComponent, data: { gender: 'men'} },
  {path: 'gender/ladies', component : GenderFormComponent, data: { gender: 'ladies'} },
  {path: 'gender/boys', component : GenderFormComponent, data: { gender: 'boys'} },
  {path: 'gender/girls', component : GenderFormComponent, data: { gender: 'girls'} },
  
  
  
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
