import { Component, OnInit, ViewChild, ChangeDetectionStrategy,HostBinding } from '@angular/core';
import { PosService } from '../../services/pos.service';
import { NbToastrService } from '@nebular/theme';
import {sprintf} from "sprintf-js";
import { Login } from '../../models/Login';
import { PesanService } from '../../providers/pesan.service';

@Component({
  selector: 'app-pos',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],

})
export class PosComponent implements OnInit {

  currentUser: Login;
  user: Login;

  dataBarang:any = [];
  dataBarangUi = [];
  beliBarangUi = [];
  dataPelanggan:any = [];
  dataPotonganPerBarang = [];
  dataPotonganMinPembelian = [];
  dataPotonganMinPembelianCampuran = [];
  dataPotonganPelanggan = [];
  dataPelangganUi = [];
  // dataPelanggan = [];

  itemArray: any =[];

  totalBelanja = 0;
  selisihHarga = 0;
  pelangganUi = 0;
  segKeranjang = 'barang';
  textCari;
  noNota;
  noFaktur;
  operator;
  pengambil;
  pengemas;
  pelanggan;
  operator_id;
  catatan;
  jumlah_beli;
  stok_barang;
  stok_sisa;
  kode_barcode_varian;
  kode_barang;
  id_barang;
  kode_kelompok;
  harga_jual;
  harga_satuan;
  kode_satuan;
  sub_total;
  presentase_bonus;
  bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agust', 'Sept', 'Okt', 'Nov', 'Des']
  tanggal =  new Date().getDate() + " - " + this.bulan[new Date().getMonth()] + " - " + new Date().getFullYear();
  notaPilih;
  textCariPelanggan;

  simpanLoading = false;
  showModalPelanggan = false;

  loading = false;

  // toggleLoadingAnimation() {
  //   this.loading = true;
  //   setTimeout(() => this.loading = false, 3000);
  // }

  constructor(
    private posService: PosService,
    private toastrService: NbToastrService,
    private pesan: PesanService
  ) {
    //this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
    //this.ambilNoNotaPelanggan(this.pelanggan.kode_pelanggan);
    console.log('user', localStorage.getItem('user'));
    if(localStorage.getItem('user') == 'undefined'){
      this.user = null;
      console.log('undifined');
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
     // console.log('iso', this.user);
      this.operator = this.user.name;
      this.operator_id = this.user._id;
    }
  }

  ngOnInit() {

   /// this.ambilDataFaktur();
  }

  ngAfterViewInit() {
    this.ambilBarangDariServer();
   // this.ambilDataPelanggan();
    this.ambilDataFaktur();
    this.ambilPotonganMinPembelian();
    this.ambilPotonganMinPembelianCampuran();
    this.ambilPotonganPerBarang();
    this.ambilPotonganPelanggan();
    this.ambilDataPelanggan();
  }

  ambilBarangDariServer(){
   // let l = this.pesan.showLoading('Memuat Data Barang');
    this.posService.getBarange().then(data => {
      this.dataBarang = data;
      this.dataBarangUi = this.dataBarang;
    }).catch(err => {
     // l.dismiss();
      this.pesan.showToast_pesan('Gagal Memuat Data Barang, Periksa Koneksi Anda.','top-right', 'danger')
      console.log(err)
    })   ;
  }

  tambahBeli(i){
    this.segKeranjang = 'barang';
    let cekPotonganPelanggan = this.dataPotonganPelanggan.filter(v => {

      if(this.pelanggan){

        return v.kode_pelanggan == this.pelanggan && v.kode_barang == this.dataBarangUi[i].kode_barang
      }else{
        return false;
      }
    });
    let cekPotonganPerBarang = this.dataPotonganPerBarang.filter(v => {
      return v.kode_barang == this.dataBarangUi[i].kode_barang && v.diskon_rupiah > 0;
    })
    let barang = {
      kode_barcode_varian: this.dataBarangUi[i].kode_barcode_varian,
      id_barang: this.dataBarangUi[i]._id,
      id_uniq: this.dataBarangUi[i].id_uniq,
      kode_barang: this.dataBarangUi[i].kode_barang,
      nama_barang: this.dataBarangUi[i].nama_barang,
      warna: this.dataBarangUi[i].warna,
      jumlah: 1,
      stok: this.dataBarangUi[i].stok,
      presentase_bonus: this.dataBarangUi[i].presentase_bonus

    }

   /// console.log('barang',barang);

    let kelompokBarang = {
      kode_barang: this.dataBarangUi[i].kode_barang,
      id_uniq: this.dataBarangUi[i].id_uniq,
      id_barang: this.dataBarangUi[i]._id,
      kode_barcode_varian: this.dataBarangUi[i].kode_barcode_varian,
      nama_barang: this.dataBarangUi[i].nama_barang,
      // warna: this.dataBarangUi[i].warna,
      // jumlah: 1,
      // stok: this.dataBarangUi[i].stok,
      // presentase_bonus: this.dataBarangUi[i].presentase_bonus,
      harga_jual: cekPotonganPelanggan.length > 0 ? cekPotonganPelanggan[0].harga_diskon :
                  cekPotonganPerBarang.length > 0 ? this.dataBarangUi[i].harga_jual - cekPotonganPerBarang[0].diskon_rupiah :
                  this.dataBarangUi[i].harga_jual,
      harga_asli: this.dataBarangUi[i].harga_jual,
      sub_total: cekPotonganPelanggan.length > 0 ? cekPotonganPelanggan[0].harga_diskon :
                 cekPotonganPerBarang.length > 0 ? this.dataBarangUi[i].harga_jual - cekPotonganPerBarang[0].diskon_rupiah :
                 this.dataBarangUi[i].harga_jual,
      kode_satuan : this.dataBarangUi[i].kode_satuan,
      kode_kelompok : this.dataBarangUi[i].kode_kelompok,
      potPel: cekPotonganPelanggan.length > 0 ? true : false,
      potPer: cekPotonganPerBarang.length > 0 ? true : false,
      barang: [barang]
    }

    let ik = -1;
    this.beliBarangUi.forEach((v, ii) => {
      if( v.kode_satuan._id == kelompokBarang.kode_satuan._id &&
          v.harga_asli == kelompokBarang.harga_asli &&
          v.potPel == kelompokBarang.potPel
      ){
        ik = ii;
      }
    })


   if(ik < 0){
      this.beliBarangUi.push(kelompokBarang);
      this.hitungTotal();
    }else{
      let ind = this.beliBarangUi[ik].barang.map(v => {
        return Number(v.kode_barcode_varian)
      }).indexOf(Number(this.dataBarangUi[i].kode_barcode_varian))

      if(ind < 0){
        this.beliBarangUi[ik].barang.push(barang);
      }else{
        this.beliBarangUi[ik].barang[ind]['jumlah'] += 1;
      }

      this.hitungSubTotal(ik, barang);
    }
  }



  inputPress(e){
    if((e.key == "Enter" || e.keyCode == 13) && this.textCari){
      if(this.dataBarangUi.length == 1){
       // this.tambahBeli(0);
      }
      e.target.select();
    }
  }

  cariOnInput(e){
    this.dataBarangUi = this.dataBarang.filter(v => {
      return v.kode_barcode_varian.toLowerCase().includes(this.textCari.toLowerCase()) || v.nama_barang.toLowerCase().includes(this.textCari.toLowerCase());
    })
  }

  kurangJumlah(ik, bbb){
    if(bbb.jumlah <= 1) return;
    bbb.jumlah -= 1;
    this.hitungSubTotal(ik, bbb);
  }

  changeJumlah(ik, bbb){
    if(Number(bbb.jumlah) > Number(bbb.stok)){
      // pesan max pembelian seeuai stok
      bbb.jumlah = bbb.stok;
    }else
    if(Number(bbb.jumlah) == 0 ){
      bbb.jumlah = 1;
    }
    this.hitungSubTotal(ik, bbb);
  }

  tambahJumlah(ik, bbb){
    // cek stok first
    if(bbb.jumlah > bbb.stok) return;
    bbb.jumlah += 1;
    this.hitungSubTotal(ik, bbb);
  }

  hapusBarang(ik, i){
    if(this.beliBarangUi[ik].barang.length == 1){
      this.beliBarangUi.splice(ik, 1);
      this.hitungTotal();
    }else{
      this.beliBarangUi[ik].barang.splice(i, 1);
      this.hitungSubTotal(ik, this.beliBarangUi[ik].barang[0]);
    }
  }

  ambilNoNotaPelanggan(noPelanggan){
    this.posService.getNoFaktur().then((data) => {
      let d = new Date().getDate(),
           m = new Date().getMonth(),
           y = new Date().getFullYear().toString().substr(-2),
           urut;

      if(!data[0].no_faktur){
        data[0].no_faktur = 'US01' +'/'+d+'/'+m+'/'+y+'-'+noPelanggan+'/'+"00";
      }
      urut = d == data[0].no_faktur.split('/')[1]? data[0].no_faktur.split('/')[4] : "00";
      urut++;
      this.noNota = 'US01' +'/'+d+'/'+m+'/'+y+'-'+noPelanggan+'/' + (urut > 9 ? "" + urut: "0" + urut);
    });
  }

  // ambilDataPelanggan(){
  //   this.posService.getPelanggane().subscribe(data => {
  //     this.dataPelanggan = data;
  //   });
  // }

  ambilDataFaktur(){
    this.posService.getNoFaktur().then((data) => {
      let urut;
      let char = "FAK";

      if(!data.no_faktur){
        data.no_faktur = char+'-'+"000";
      }

      urut = data.no_faktur.split('-')[1];
      urut++;
      this.noNota = char+'-'+sprintf("%03s", urut);

    }, (error) => {
      console.log(error);
     // this.loading = false;
      this.pesan.showLoadingGagal('top-right', 'danger');
    });
  }

  ambilPotonganPerBarang(){
    this.posService.penjualanGetPotonganPerBarang().then(data => {
      this.dataPotonganPerBarang = data;
      // console.log(data, 'ambilPotonganPerBarang')
    }).catch(err => {
     // this.pesan.showToast("Gagal Memuat Data Potongan Pembelian Per Barang, Periksa Koneksi Anda.", 'bottom', 'danger')
      this.pesan.showToast_pesan('Gagal Memuat Data Potongan Pembelian Per Barang, Periksa Koneksi Anda.','top-right', 'danger')
      console.log(err)
    });
  }

  ambilPotonganMinPembelian(){
    this.posService.penjualanGetPotonganMinPembelian().then(data => {
      this.dataPotonganMinPembelian = data.sort(function (a, b) {
        // console.log('a.kode_barang',a.kode_barang);
        // console.log('b.kode_barang',b.kode_barang);
        // console.log('a',a.id_uniq);
        // console.log('b',b.id_uniq);
        return a.id_uniq - b.id_uniq || b.qty - a.qty ;
      });
       console.log(this.dataPotonganMinPembelian, 'ambilPotonganMinPembelian')
    }).catch(err => {
      this.pesan.showToast_pesan('Gagal Memuat Data Potongan Minimum Pembelian, Periksa Koneksi Anda.','top-right', 'danger')
      console.log(err);
    });
  }

  ambilPotonganMinPembelianCampuran(){
    this.posService.penjualanGetPotonganMinPembelianCampuran().then(data => {
      this.dataPotonganMinPembelianCampuran = data.sort(function (a, b) {
        return a.kode_barang - b.kode_barang || b.qty - a.qty ;
      });
      // console.log('data potongan min pembelian campuran: ', data)
    }).catch(err => {
      console.log(err);
      this.pesan.showToast_pesan('Gagal Memuat Data Potongan Minimum Pembelian, Periksa Koneksi Anda.','top-right', 'danger')
    });
  }

  ambilPotonganPelanggan(){
    this.posService.penjualanGetPotonganPelanggan().then(data => {
      this.dataPotonganPelanggan = data;
      console.log('data potongan pelanggan: ', data)
    }).catch(err => {
      this.pesan.showToast_pesan('Gagal Memuat Data Potongan Pelanggan, Periksa Koneksi Anda.','top-right', 'danger')
      console.log(err)
    })
  }

  ambilDataPelanggan(){
    this.posService.getDataPelanggan().then(data => {
      this.dataPelanggan = data;
      this.dataPelangganUi = data;
      console.log(this.dataPelangganUi);
    }).catch(err => {
      this.pesan.showToast_pesan("Gagal Memuat Data Pelanggan, Periksa Koneksi Anda.", 'top-right', 'danger')
      console.log(err);
    })
  }


  changePelanggane(e){
    console.log('change data pelanggan');
  }

  hitungSubTotal(ik, bbb){
    let jumlah = this.beliBarangUi[ik].barang
    .map(v => { return v.jumlah })
    .reduce((a, c) => { return Number(a) + Number(c) }, 0);

    let cekPotonganMinPembelian = this.dataPotonganMinPembelian.filter(v => {

      return v.id_uniq == bbb.id_uniq && Number(v.qty) <= Number(jumlah) && this.beliBarangUi[ik].barang.length < 2;
    })

    let cekPotonganMinPembelianCampuran = this.dataPotonganMinPembelianCampuran.filter(v => {
      return v.kode_barang == this.beliBarangUi[ik].kode_barang && Number(v.qty) <= Number(jumlah) && v.kode_satuan == this.beliBarangUi[ik].kode_satuan && this.beliBarangUi[ik].barang.length > 1;
    })
    console.log('cek',cekPotonganMinPembelian.length);
    console.log( 'harga_jual', this.beliBarangUi[ik].harga_jual);
    let harga_jual =  this.beliBarangUi[ik].potPel ? this.beliBarangUi[ik].harga_jual :
                      cekPotonganMinPembelianCampuran.length > 0 && !this.beliBarangUi[ik].potPel? cekPotonganMinPembelianCampuran[0].harga_jual_campuran :
                      cekPotonganMinPembelian.length > 0 && !this.beliBarangUi[ik].potPel && !this.beliBarangUi[ik].potMinC ? cekPotonganMinPembelian[0].harga :
                      this.beliBarangUi[ik].harga_asli;

    this.beliBarangUi[ik]['potMinC'] = cekPotonganMinPembelianCampuran.length > 0 && !this.beliBarangUi[ik].potPel? true : false;
    this.beliBarangUi[ik]['potMin'] = cekPotonganMinPembelian.length > 0 && !this.beliBarangUi[ik].potPel && !this.beliBarangUi[ik]['potMinC'] ? true : false;

    this.beliBarangUi[ik].sub_total = jumlah * harga_jual;
    this.beliBarangUi[ik].harga_jual = harga_jual;

    this.hitungTotal();

  }

  hitungTotal(){
    this.totalBelanja = this.beliBarangUi
    .map(v => { return v.sub_total })
    .reduce((a, c) => { return Number(a) + Number(c) }, 0);
  }

  batal(){
    this.beliBarangUi = [];
    this.pelanggan = 0;
    this.totalBelanja = 0;
  }

  simpan(){
    console.log('simpan');

    this.simpanLoading = true;
    let dataSimpan = {
      dariAplikasi: true,
      no_faktur: this.noNota,
      operator: this.operator_id,
      // pengemas_barang: this.pengemas.kode_karyawan,
      waktu: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
      tanggal: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
      kode_pelanggan: this.pelanggan && this.pelanggan != 0? this.pelanggan.kode_pelanggan : "",
      kode_karyawan : localStorage.getItem('_id'),
      catatan: this.catatan,
      jumlah_beli: [],
      stok_barang: [],
      stok_sisa : [],
      kode_barcode_varian: [],
      kode_barang: [],
      id_barang: [],
      kode_kelompok: [],
      // id_barangne: [],
      harga_jual: [],
      harga_satuan: [],
      kode_satuan: [],
      sub_total: [],
      presentase_bonus: [],
      Total: this.totalBelanja
    }

    
    // console.log('beliBarangUi', this.beliBarangUi);
    // let length = this.beliBarangUi.length;
    // console.log('length',length);

    //   let x ;
    //   for (let count = 0 ; count < length; count++) {
    //       x = this.beliBarangUi[count]['barang'];
    //       console.log('xxx',x)
    //   }

    this.beliBarangUi.forEach((v, i) => {
      v.barang.forEach((vv, i) => {
        dataSimpan['jumlah_beli'].push(vv.jumlah);
        dataSimpan['stok_barang'].push(vv.stok);
        dataSimpan['kode_barcode_varian'].push(vv.kode_barcode_varian);
        //dataSimpan['kode_kelompok'].push(vv.id_kelompok);
        dataSimpan['kode_barang'].push(vv.id_barang);
        dataSimpan['no_faktur'] = this.noNota;
        dataSimpan['total_harga'] = this.totalBelanja;
        dataSimpan['selisih'] = 0 - this.totalBelanja;
        dataSimpan['harga_jual'].push(v.harga_jual);
        dataSimpan['stok_sisa'].push(vv.stok - vv.jumlah);

        //let length = dataSimpan['jumlah_beli'].push(vv.jumlah).length;

       // console.log('length',length);

        //dataSimpan['presentase_bonus'].push(vv.presentase_bonus);
      })

      //dataSimpan['kode_barang'].push(v._id);
       dataSimpan['harga_jual'].push(v.harga_jual);
       dataSimpan['kode_satuan'] = [...dataSimpan['kode_satuan'], v.kode_satuan._id];
       dataSimpan['kode_kelompok'] = [...dataSimpan['kode_kelompok'], v.kode_kelompok._id];
       dataSimpan['sub_total'].push(v.sub_total);
       //dataSimpan['kode_barang'] = [...dataSimpan['kode_barang'], v._id];


      // console.log('dataSimpan',this.itemArray.push([dataSimpan['kode_barang']]));

     // console.log('kode_satuan',[...dataSimpan['kode_satuan'], v.kode_satuan._id]);

    })

    console.log('dataSimpan', dataSimpan);
    this.posService.createPenjualan(dataSimpan).subscribe(data => {
        setTimeout(() => this.simpanLoading = false, 3000);
        this.beliBarangUi = [];
        this.pelanggan = 0;
        console.log('iso');
        this.totalBelanja = 0;
        this.ambilDataFaktur();
        this.pesan.showToast('top-right', 'success')
    }, (error) => {
        console.log(error);
        setTimeout(() => this.simpanLoading = false, 3000);
        this.pesan.showToast('top-right', 'danger')
    });
  }

  openModalPelangan(){
    console.log('modal');
    this.showModalPelanggan = true;
  }

  modalBatal(){
    this.showModalPelanggan = false;
    // this.pelangganUi = 0;
    // this.showModalKaryawan = false;
    // this.karyawanUi = 0;
    // this.titleModalKaryawan = 'Karyawan';
    // this.showNotaModal = false;
    // this.notaPrintHtml = null;
  }

  cariPelanggan(){
    this.dataPelangganUi = this.dataPelanggan.filter(v => {
      return v.nama_pelanggan.toLowerCase().includes(this.textCariPelanggan.toLowerCase()) || v.kode_pelanggan.toLowerCase().includes(this.textCariPelanggan.toLowerCase()) || v.no_telp.toLowerCase().includes(this.textCariPelanggan.toLowerCase());
    })
  }

  modalPelangganOk(){
    this.beliBarangUi = [];
   // this.pesan.showToast_pesan('Data Di Keranjang DiKosongkan','top-right', 'danger');
    this.pesan.showToast_pelanggan('top-right', 'success')
    this.catatan = "";
    // console.log(this.pelangganUi, 'change data pelanggan')
    this.pelanggan = this.pelangganUi;
    // if(this.pelanggan && this.pelanggan.kode_pelanggan){
    //   this.ambilNoNotaPelanggan(this.pelanggan.kode_pelanggan);
    // }

    this.showModalPelanggan = false;
  }


}
