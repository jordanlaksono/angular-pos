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

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
// import { TopListComponent } from './top-list/top-list.component';
// import { TopCreateComponent } from './top-create/top-create.component';
// import { TopEditComponent } from './top-edit/top-edit.component';

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
    SupplierRoutingModule
  ],
  declarations: [
    SupplierComponent,
    SupplierListComponent,
    SupplierCreateComponent,
    SupplierEditComponent,

  ],
})
export class SupplierModule {}
