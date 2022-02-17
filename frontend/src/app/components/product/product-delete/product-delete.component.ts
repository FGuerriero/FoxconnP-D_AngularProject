import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 1,
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
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById( id, this.productService.productURL).subscribe( product =>{
      this.product = product;
    })
  }

  deleteProduct(): void {
    if(confirm("Are you sure to delete " + this.product.name + "?")){
      this.productService.delete(this.product.id, this.productService.productURL).subscribe( () => {
        this.productService.showMessage("Product successfully DELETED!")
      });
      this.router.navigate(['/products']);
    }else{
      this.productService.showMessage("Operation Canceled!");
      this.router.navigate(['/products']);
    }
      
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
