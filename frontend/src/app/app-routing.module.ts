import { PartnerDeleteComponent } from './components/partners/partner-delete/partner-delete.component';
import { PartnerUpdateComponent } from './components/partners/partner-update/partner-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { PartnerCreateComponent } from './components/partners/partner-create/partner-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { PartnersCrudComponent } from './views/partners-crud/partners-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  //--------Partners routes
  {
    path: "partners",
    component: PartnersCrudComponent
  },
  {
    path: "partners/create",
    component: PartnerCreateComponent
  },
  {
    path: "partners/update/:id",
    component: PartnerUpdateComponent
  },
  {
    path: "partners/delete/:id",
    component: PartnerDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
