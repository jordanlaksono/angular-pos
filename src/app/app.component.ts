import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'client';

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.doLogout()
  }
}
