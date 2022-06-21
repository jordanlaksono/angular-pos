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
  NbToastrModule
} from '@nebular/theme';

import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { PegawaiRoutingModule } from './pegawai-routing.module';
import { PegawaiComponent } from './pegawai.component';
import { PegawaiListComponent } from './pegawai-list/pegawai-list.component';
import { PegawaiCreateComponent } from './pegawai-create/pegawai-create.component';
import { PegawaiEditComponent } from './pegawai-edit/pegawai-edit.component';
// import { SupplierListComponent } from './supplier-list/supplier-list.component';
// import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
// import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';


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
    PegawaiRoutingModule,
    NbSpinnerModule,
    NbToastrModule
  ],
  declarations: [
    PegawaiComponent,
    PegawaiListComponent,
    PegawaiCreateComponent,
    PegawaiEditComponent,
    // SupplierListComponent,
    // SupplierCreateComponent,
    // SupplierEditComponent,

  ],
})
export class PegawaiModule {}
