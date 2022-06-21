import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbSelectModule,
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbSidebarModule,
  NbLayoutModule,
  NbToastrModule,
  NbSpinnerModule,
} from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';
//import { PosComponent } from './pos/pos.component';
// import { JalanModule } from './jalan/jalan.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbMenuModule.forRoot(),
    DashboardModule,
    NbActionsModule,
    NbCardModule,
    NbSelectModule,
    MiscellaneousModule,
    NbToastrModule.forRoot(),
    NbSpinnerModule,
    AutocompleteLibModule
    // PetaModule,
    // JalanModule
  ],
  declarations: [
    PagesComponent,
   // PosComponent
  ],
})
export class PagesModule {
}
