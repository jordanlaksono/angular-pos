import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbSelectModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbTabsetModule,
  NbListModule,
  NbLayoutModule,
  NbIconModule,
  NbToastrModule,
  NbSpinnerModule,

} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { PosComponent } from './pos.component';

@NgModule({
  imports: [
    //ThemeModule,
    CommonModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbTabsetModule,
    NbListModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    FormsModule,
    NbSelectModule,
    NbActionsModule,
    NbToastrModule.forRoot(),
    NbSpinnerModule,
  ],
  declarations: [
    PosComponent
  ]
})
export class PetaModule { }
