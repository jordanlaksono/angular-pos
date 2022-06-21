import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LokasiComponent } from './lokasi.component';
import { LokasiListComponent } from './lokasi-list/lokasi-list.component';
import { LokasiCreateComponent } from './lokasi-create/lokasi-create.component';
import { LokasiEditComponent } from './lokasi-edit/lokasi-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LokasiComponent,
    children: [
      {
        path: 'inputs',
        component: LokasiCreateComponent,
      },
      {
        path: 'list',
        component: LokasiListComponent,
      },
      {
        path: 'edit-lokasi/:id',
        component: LokasiEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LokasiRoutingModule {
}
