import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerServices: HeaderService) { 
  }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerServices.headerData.text;
  }

  get icon(): string {
    return this.headerServices.headerData.icon;
  }

  get routeURL(): string {
    return this.headerServices.headerData.routeURL;
  }
}
