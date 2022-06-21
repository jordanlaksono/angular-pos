import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PelangganComponent } from './pelanggan.component';
import { PelangganListComponent } from './pelanggan-list/pelanggan-list.component';
import { PelangganCreateComponent } from './pelanggan-create/pelanggan-create.component';
import { PelangganEditComponent } from './pelanggan-edit/pelanggan-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PelangganComponent,
    children: [
      {
        path: 'inputs',
        component: PelangganCreateComponent,
      },
      {
        path: 'list',
        component: PelangganListComponent,
      },
      {
        path: 'edit-pelanggan/:id',
        component: PelangganEditComponent,
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
export class PelangganRoutingModule {
}
