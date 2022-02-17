import { CrudService } from './../../crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Partner } from './../partners.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-delete',
  templateUrl: './partner-delete.component.html',
  styleUrls: ['./partner-delete.component.css']
})
export class PartnerDeleteComponent implements OnInit {

  partner: Partner = {
    name: '',
    city: '',
    projects: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private partnerService: CrudService
  ) { }

  ngOnInit(): void {
    this.partnerService.readById( this.route.snapshot.paramMap.get('id'),this.partnerService.partnerURL).subscribe( partner =>{
      this.partner = partner
    })
  }

  deletePartner(): void {
    if(confirm("Are you sure to delete " + this.partner.name + "?")){
      this.partnerService.delete(this.partner.id, this.partnerService.partnerURL).subscribe( () => {
        this.partnerService.showMessage("Partner successfully DELETED!");
      });
      this.router.navigate(['/partners']);
    }else{
      this.router.navigate(['/partners']);
    }
  }

  cancel(): void {
    this.router.navigate(['/partners']);
  }

}
