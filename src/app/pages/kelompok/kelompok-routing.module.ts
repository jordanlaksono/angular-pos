import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KelompokComponent } from './kelompok.component';
import { KelompokListComponent } from './kelompok-list/kelompok-list.component';
import { KelompokCreateComponent } from './kelompok-create/kelompok-create.component';
import { KelompokEditComponent } from './kelompok-edit/kelompok-edit.component';
const routes: Routes = [
  {
    path: '',
    component: KelompokComponent,
    children: [
      {
        path: 'inputs',
        component: KelompokCreateComponent,
      },
      {
        path: 'list',
        component: KelompokListComponent,
      },
      {
        path: 'edit-kelompok/:id',
        component: KelompokEditComponent,
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
export class KelompokRoutingModule {
}
