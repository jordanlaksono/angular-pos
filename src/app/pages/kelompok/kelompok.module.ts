import { NgModule } from '@angular/core';
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

import { KelompokRoutingModule } from './kelompok-routing.module';
import { KelompokComponent } from './kelompok.component';
import { KelompokListComponent } from './kelompok-list/kelompok-list.component';
// import { KelompokCreateComponent } from './kelompok-create/kelompok-create.component';
import { CommonModule } from '@angular/common';
import { KelompokCreateComponent } from './kelompok-create/kelompok-create.component';
import { KelompokEditComponent } from './kelompok-edit/kelompok-edit.component';
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
    KelompokRoutingModule,
    DataTablesModule,
    CommonModule,
    NbAlertModule
  ],
  declarations: [
    KelompokComponent,
    KelompokListComponent,
    KelompokCreateComponent,
    KelompokEditComponent,
    // KelompokCreateComponent
  ],
})
export class KelompokModule { }
