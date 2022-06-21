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
import { LokasiRoutingModule } from './lokasi-routing.module';
import { LokasiComponent } from './lokasi.component';
import { LokasiListComponent } from './lokasi-list/lokasi-list.component';
import { LokasiCreateComponent } from './lokasi-create/lokasi-create.component';
import { LokasiEditComponent } from './lokasi-edit/lokasi-edit.component';

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
    LokasiRoutingModule
  ],
  declarations: [
    // SatuanListComponent,
    LokasiComponent,
    LokasiListComponent,
    LokasiCreateComponent,
    LokasiEditComponent,
    // SatuanCreateComponent,
    // SatuanEditComponent
  ],
})
export class LokasiModule { }
