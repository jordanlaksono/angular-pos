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
import { SatuanRoutingModule } from './satuan-routing.module';

import { DataTablesModule } from 'angular-datatables';
import { SatuanComponent } from './satuan.component';
import { SatuanListComponent } from './satuan-list/satuan-list.component';
import { SatuanCreateComponent } from './satuan-create/satuan-create.component';
import { SatuanEditComponent } from './satuan-edit/satuan-edit.component';

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
    SatuanRoutingModule
  ],
  declarations: [
    SatuanListComponent,
    SatuanComponent,
    SatuanCreateComponent,
    SatuanEditComponent
  ],
})
export class SatuanModule { }
