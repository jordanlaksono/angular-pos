import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SatuanComponent } from './satuan.component';
import { SatuanListComponent } from './satuan-list/satuan-list.component';
import { SatuanCreateComponent } from './satuan-create/satuan-create.component';
import { SatuanEditComponent } from './satuan-edit/satuan-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SatuanComponent,
    children: [
      {
        path: 'inputs',
        component: SatuanCreateComponent,
      },
      {
        path: 'list',
        component: SatuanListComponent,
      },
      {
        path: 'edit-satuan/:id',
        component: SatuanEditComponent,
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
export class SatuanRoutingModule {
}
