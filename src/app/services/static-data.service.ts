import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  constructor() { }
  
  genders: string[] = [
    'Mens',
    'Ladies',
    'Boys',
    'Girls'
  ]
  
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
}
