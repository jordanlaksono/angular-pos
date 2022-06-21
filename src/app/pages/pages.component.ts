import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MENU_ITEMS } from './pages-menu';

import { NbSidebarService, NbMenuService } from '@nebular/theme';
import { AuthService } from '../shared/auth.service';
import { Login } from '../models/Login';

@Component({
  selector: 'ngx-pages',
  template: `
  <nb-layout>
    <nb-sidebar state="expand" containerFixed="false">
      <nb-menu [items]="items"></nb-menu>
    </nb-sidebar>
    <nb-layout-column>
      <router-outlet></router-outlet>
    </nb-layout-column>
  </nb-layout>
  `,
  styleUrls: ['./pages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent {
  items = MENU_ITEMS;
  currentUser: Login;
  constructor(
    private sidebar: NbSidebarService,
    private menu: NbMenuService,
    public authService: AuthService
    ) {

      menu.onItemClick().subscribe((data) => {
        if(data.item.title == 'Logout'){
          this.logout();
        }
      });
    }

    logout() {
      this.authService.doLogout();
    }

}
