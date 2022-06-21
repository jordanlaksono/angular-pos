import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbAlertModule
} from '@nebular/theme';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    //ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    CommonModule,
    NbAlertModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
