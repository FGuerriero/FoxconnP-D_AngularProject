import { Router } from '@angular/router';
import { Partner } from './../partners.model';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-create',
  templateUrl: './partner-create.component.html',
  styleUrls: ['./partner-create.component.css']
})
export class PartnerCreateComponent implements OnInit {

  partner: Partner = {
    name: "",
    city: "",
    projects: "",
  }

  constructor(
    private partnerService: CrudService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criatePartner(): void {
    this.partnerService.create(this.partner,this.partnerService.partnerURL).subscribe(()=>{
      this.partnerService.showMessage("Partner Successfully SAVED!!");
      this.router.navigate(['/partners']);
    })
  }

}
