import { Header } from './header.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<Header>({
    icon: 'home',
    text: 'Home',
    routeURL: ''
  })

  constructor() { }

  get headerData(): Header {
    return this._headerData.value;
  }

  set headerData(headerData: Header){
    this._headerData.next(headerData);
  }
}
