import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top.component';
import { TopListComponent } from './top-list/top-list.component';
import { TopCreateComponent } from './top-create/top-create.component';
import { TopEditComponent } from './top-edit/top-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
    children: [
      {
        path: 'inputs',
        component: TopCreateComponent,
      },
      {
        path: 'list',
        component: TopListComponent,
      },
      {
        path: 'edit-top/:id',
        component: TopEditComponent,
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
export class TopRoutingModule {
}
