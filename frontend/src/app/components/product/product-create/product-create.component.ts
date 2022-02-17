import { Product } from './../product.model';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product ={
    name: '',
    price: 0,
    plant: '',
    prodType: '',
    customer: ''
  }

  constructor(
    private productService: CrudService,
    private router: Router 
  ) { }

  ngOnInit(): void {
  }

  createProduct(){
    this.productService.create(this.product,this.productService.productURL).subscribe(()=>{
      this.productService.showMessage('Product Successfully  SAVED!!');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
