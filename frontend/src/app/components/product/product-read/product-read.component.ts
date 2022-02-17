import { Product } from './../product.model';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'plant', 'customer', 'prodType', 'action'];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.read(this.crudService.productURL).subscribe(productsOBS => {
      this.products = productsOBS;
    })
  }
}
