import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    customer: '',
    plant: '',
    price: 0,
    prodType: '',  
  }

  constructor(
    private productService: CrudService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById( id, this.productService.productURL).subscribe( product =>{
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product, this.productService.productURL).subscribe( (): void =>{
      this.productService.showMessage("Product successfully Saved!");
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
