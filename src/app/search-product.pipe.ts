import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[],term:string): Product[] {
    return products.filter((product)=> product.title.toLowerCase().includes(term.toLowerCase()))
  }

}
