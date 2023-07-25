import { Category } from './../../core/interfaces/category';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allCategories:Category[]=[]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    autoplay : true,
    autoplayTimeout:5000,
autoplayHoverPause:false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 8
      }
    },
    nav: true
  }







constructor(private _productsService:ProductsService){

}
ngOnInit(): void {
    this.getCategories()
}
getCategories(){
  this._productsService.getCategories().subscribe((res)=>{
    this.allCategories=res.data
  })
}
}
