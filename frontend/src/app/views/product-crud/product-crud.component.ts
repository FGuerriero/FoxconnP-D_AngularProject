import { HeaderService } from './../../components/templates/header/header.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      icon: 'storefront',
      text: 'Products Records',
      routeURL: '/products'
    }
  }

  ngOnInit(): void {
  }

  navToProductCreate(): void{
    this.router.navigate(['products/create']);
  }

}
