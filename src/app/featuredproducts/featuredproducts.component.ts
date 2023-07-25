import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/services/products.service';
import { Product } from '../product';
import * as Aos from 'aos';
@Component({
  selector: 'app-featuredproducts',
  templateUrl: './featuredproducts.component.html',
  styleUrls: ['./featuredproducts.component.css']
})
export class FeaturedproductsComponent implements OnInit {

stars:any[]=[]
allProduct:Product[]=[]
searchTerm:string=""
constructor(private _productServices:ProductsService){

}

ngOnInit(): void {
    this.getAllProducts()
    Aos.init();
}


getAllProducts(){
  this._productServices.getProducts().subscribe({
    next:(res)=>{
      this.allProduct = res.data
      console.log(res.data);
      this.getStars()
    }
  })
}

getStars(){
  for (let i = 0; i < this.allProduct.length; i++) {
  let average = Math.round(this.allProduct[i].ratingsAverage)
  // console.log(average);
    for (let x = 1; x <= average; x++) {
      this.stars.push(x)
      this.allProduct[i].ratingsAverage= this.stars;
    }
this.stars = []
// console.log(this.stars);
  }
}
}

