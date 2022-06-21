import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { BarangComponent } from './barang.component';
 import { BarangListComponent } from './barang-list/barang-list.component';
 import { BarangCreateComponent } from './barang-create/barang-create.component';

const routes: Routes = [
  {
    path: '',
    component: BarangComponent,
    children: [
      {
        path: 'inputs',
        component: BarangCreateComponent,
      },
      {
        path: 'list',
        component: BarangListComponent,
      },
      // {
      //   path: 'edit-supplier/:id',
      //   component: SupplierEditComponent,
      // },
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
export class BarangRoutingModule {
}
