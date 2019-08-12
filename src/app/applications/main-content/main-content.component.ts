import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TabService} from '../../core/services/tab.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  tabs = [];
  activeTabUrl;

  constructor(
    private router: Router,
    private tabService: TabService
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeTabUrl = event.urlAfterRedirects;
        if (this.tabs.length === 0) {
          this.tabService.addTab(this.activeTabUrl);
        }
      }
    });
    this.tabs = this.tabService.tabs;
  }

  closeTab(index: number, event: Event) {
    this.tabService.deleteTab(index);
    event.preventDefault();
  }

  onTabChange(event) {
    this.router.navigateByUrl(event.nextId);
  }

}
