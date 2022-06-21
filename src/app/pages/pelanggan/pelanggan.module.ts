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
  NbAlertModule,
  NbSpinnerModule,
  NbDialogModule,
  NbToastrModule
} from '@nebular/theme';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { PelangganListComponent } from './pelanggan-list/pelanggan-list.component';

import { PelangganRoutingModule } from './pelanggan-routing.module';
import { PelangganComponent } from './pelanggan.component';
import { PelangganCreateComponent } from './pelanggan-create/pelanggan-create.component';
import { PelangganEditComponent } from './pelanggan-edit/pelanggan-edit.component';



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
    PelangganRoutingModule,
    NbSpinnerModule,
    FormsModule,
    NbDialogModule,
    NbToastrModule
  ],
  declarations: [
  PelangganComponent,
  PelangganListComponent,
  PelangganCreateComponent,
  PelangganEditComponent],
})
export class PelangganModule {}
