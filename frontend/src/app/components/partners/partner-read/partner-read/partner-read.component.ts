import { CrudService } from './../../../crud.service';
import { Partner } from './../../partners.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-read',
  templateUrl: './partner-read.component.html',
  styleUrls: ['./partner-read.component.css']
})
export class PartnerReadComponent implements OnInit {

  partners: Partner[]=[];
  displayedColumns = ['id', 'name', 'projects', 'city', 'actions'];

  constructor(private partnerService: CrudService) { }

  ngOnInit(): void {
    this.partnerService.read(this.partnerService.partnerURL).subscribe(partners =>{
      this.partners = partners;
    })
  }

}
