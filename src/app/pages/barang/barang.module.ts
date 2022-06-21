import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  NbTabsetModule,
  NbSpinnerModule
} from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { BarangRoutingModule } from './barang-routing.module';
import { BarangComponent } from './barang.component';
import { BarangListComponent } from './barang-list/barang-list.component';
import { BarangCreateComponent } from './barang-create/barang-create.component';

import { AutocompleteLibModule } from 'angular-ng-autocomplete';


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
    BarangRoutingModule,
    NbTabsetModule,
    FormsModule,
    NbSpinnerModule,
    AutocompleteLibModule
  ],
  declarations: [
    BarangComponent,
    BarangListComponent,
    BarangCreateComponent

  ],
})
export class BarangModule {}
