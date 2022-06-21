import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
//import { PosComponent } from './pos/pos.component';
// import { JalanComponent } from './jalan/jalan.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'kelompok',
      loadChildren: () => import('./kelompok/kelompok.module')
        .then(m => m.KelompokModule),
    },
    {
      path: 'satuan',
      loadChildren: () => import('./satuan/satuan.module')
        .then(m => m.SatuanModule),
    },
    {
      path: 'top',
      loadChildren: () => import('./top/top.module')
        .then(m => m.TopModule),
    },
    {
      path: 'supplier',
      loadChildren: () => import('./supplier/supplier.module')
        .then(m => m.SupplierModule),
    },
    {
      path: 'lokasi',
      loadChildren: () => import('./lokasi/lokasi.module')
        .then(m => m.LokasiModule),
    },
    {
      path: 'pegawai',
      loadChildren: () => import('./pegawai/pegawai.module')
        .then(m => m.PegawaiModule),
    },
    {
      path: 'barang',
      loadChildren: () => import('./barang/barang.module')
        .then(m => m.BarangModule),
    },
    {
      path: 'pelanggan',
      loadChildren: () => import('./pelanggan/pelanggan.module')
        .then(m => m.PelangganModule),
    },
    // {
    //   path: 'pos',
    //   component: PosComponent
    // },
    {
      path: '**',
      component: NotFoundComponent,
    },
    // {
    //   path: '**',
    //   component: PageNotFoundComponent,
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
