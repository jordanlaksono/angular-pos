import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbAlertModule
} from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { TopRoutingModule } from './top-routing.module';
import { TopComponent } from './top.component';
import { TopListComponent } from './top-list/top-list.component';
import { TopCreateComponent } from './top-create/top-create.component';
import { TopEditComponent } from './top-edit/top-edit.component';

@NgModule({
  imports: [
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ReactiveFormsModule,
    DataTablesModule,
    CommonModule,
    NbAlertModule,
    TopRoutingModule
  ],
  declarations: [
    // SatuanListComponent,
    TopComponent,
    TopListComponent,
    TopCreateComponent,
    TopEditComponent,
    // SatuanCreateComponent,
    // SatuanEditComponent
  ],
})
export class TopModule {}
