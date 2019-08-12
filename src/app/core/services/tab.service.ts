import {Injectable} from '@angular/core';
import {TabModel} from '../models/tab.model';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: TabModel[] = [];
  tabOptions: TabModel[] = [
    {
      name: 'Movies',
      url: '/movies'
    },
    {
      name: 'Songs',
      url: '/songs'
    }
  ];

  constructor() {
  }

  addTab(url: string) {
    const tab = this.getTabOptionByUrl(url);
    if (!this.tabs.includes(tab)) {
      this.tabs.push(tab);
    }
  }

  getTabOptionByUrl(url: string): TabModel {
    return this.tabOptions.find(tab => tab.url === url);

  }

  deleteTab(index: number) {
    this.tabs.splice(index, 1);
  }


}
