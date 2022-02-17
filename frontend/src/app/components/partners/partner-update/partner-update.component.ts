import { CrudService } from './../../crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Partner } from './../partners.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-update',
  templateUrl: './partner-update.component.html',
  styleUrls: ['./partner-update.component.css']
})
export class PartnerUpdateComponent implements OnInit {

  partner: Partner = {
    name: '',
    city: '',
    projects: ''
  }

  constructor(
    private router: Router,
    private partnerService: CrudService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.partnerService.readById(this.route.snapshot.paramMap.get('id'), this.partnerService.partnerURL).subscribe( partner => {
      this.partner = partner;
    })
  }

  updatePartner(): void {
    this.partnerService.update( this.partner, this.partnerService.partnerURL).subscribe( () =>{
      this.partnerService.showMessage("Partner successfully SAVED!!");
      this.router.navigate(['/partners']);
    })
  }

  cancel(): void {
    this.router.navigate(['/partners']);
  }

}
