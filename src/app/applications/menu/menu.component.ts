import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TabService} from '../../core/services/tab.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuOptions = [];

  constructor(
    private router: Router,
    private tabService: TabService,
  ) {
  }

  ngOnInit() {
    this.menuOptions = this.tabService.tabOptions;
  }

  openTab(url: string) {
    this.tabService.addTab(url);
    this.router.navigateByUrl(url);
  }

}
