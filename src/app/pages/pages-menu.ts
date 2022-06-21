import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
// {
//   title: 'Logo',
//   icon: 'menu-2-outline',
//   link: ''
// },
{
  title: 'Dashboard',
  icon: 'globe-outline',
  link: '/pages/dashboard'
},
{
  title: 'FEATURES',
  group: true,
},
{
  title: 'Master',
  icon: 'layout-outline',
  children: [
    {
      title: 'Master Pegawai',
      link: '/pages/pegawai/list',
    },
    {
      title: 'Master Pelanggan',
      link: '/pages/pelanggan/list',
    },
    {
      title: 'Master Supplier',
      link: '/pages/supplier/list',
    },
    {
      title: 'Master Barang',
      link: '/pages/barang/list',
    },
    {
      title: 'Master Satuan',
      link: '/pages/satuan/list',
    },
    {
      title: 'Master Kelompok',
      link: '/pages/kelompok/list',
    },
    {
      title: 'Master TOP',
      link: '/pages/top/list',
    },
    {
      title: 'Master Lokasi',
      link: '/pages/lokasi/list',
    },
  ],
},
{
  title: 'Penjualan',
  icon: 'shopping-cart-outline',
  children: [
    {
      title: 'POS',
      link: '/pos',
    },
    {
      title: 'Kasir',
      link: '/kasir',
    }
  ],
},
{
  title: 'Logout',
  icon: 'alert-circle-outline',
  link: ''
},
];
