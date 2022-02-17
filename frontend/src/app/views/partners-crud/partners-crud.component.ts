import { HeaderService } from './../../components/templates/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners-crud',
  templateUrl: './partners-crud.component.html',
  styleUrls: ['./partners-crud.component.css']
})
export class PartnersCrudComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      icon: 'groups',
      text: 'Partners Records',
      routeURL: '/partners'
    }
   }

  ngOnInit(): void {
  }

}
