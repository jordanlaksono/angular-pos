import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupplierComponent } from './supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
// import { TopEditComponent } from './top-edit/top-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SupplierComponent,
    children: [
      {
        path: 'inputs',
        component: SupplierCreateComponent,
      },
      {
        path: 'list',
        component: SupplierListComponent,
      },
      {
        path: 'edit-supplier/:id',
        component: SupplierEditComponent,
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
export class SupplierRoutingModule {
}
