import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PegawaiComponent } from './pegawai.component';
import { PegawaiListComponent } from './pegawai-list/pegawai-list.component';
import { PegawaiCreateComponent } from './pegawai-create/pegawai-create.component';
import { PegawaiEditComponent } from './pegawai-edit/pegawai-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PegawaiComponent,
    children: [
      {
        path: 'inputs',
        component: PegawaiCreateComponent,
      },
      {
        path: 'list',
        component: PegawaiListComponent,
      },
      {
        path: 'edit-pegawai/:id',
        component: PegawaiEditComponent,
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
export class PegawaiRoutingModule {
}
