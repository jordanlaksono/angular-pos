import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarangService } from '../../../services/barang.service';
import { PosService } from '../../../services/pos.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { PesanService } from '../../../providers/pesan.service';
import { NbToastrService } from '@nebular/theme';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-barang-create',
  templateUrl: './barang-create.component.html',
  styleUrls: ['./barang-create.component.scss']
})
export class BarangCreateComponent implements OnInit {
  submitted = false;
  showModalPelanggan = false;
  barangForm: FormGroup;
  Kelompok:any = [];
  Satuan:any = [];
  Pelanggan:any = [];
  dataPelanggan:any = [];
  hargaQty = [];
  segKeranjang = 'barang';
  beliBarangUi = [];
  beliCampuranUi = [];
  beliPelangganUi = [];
  dataPelangganUi = [];
  pelangganUi = 0;
  idUniq;

  data: any;
  keyword = 'name';
  errorMsg: string;
  isLoadingResult: boolean

  id_uniq;
  kode_barang;
  kode_barcode;
  nama_barang;
  hitungan;
  warna;
  harga_jual;
  harga_beli;
  diskon;
  harga_minimum;
  presentase_bonus;
  kelompok_data;
  satuan_data;
  stok;
  textCariPelanggan;
  pelanggane;

  simpanLoading = false;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private barangService: BarangService,
    private toastrService: NbToastrService,
    private pesan: PesanService,
    private http: HttpClient,
    private posService: PosService
  ) {
    this.readKelompok();
    this.readSatuan();
    this.ambilidUniq();
    //this.readPelanggan();
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.ambilDataPelanggan();
  }

  get myForm(){
    return this.barangForm.controls;
  }

  tambahBeli(){
    this.segKeranjang = 'barang';

    let barang = {
      jumlah: 0,
      harga: 0
    }

    let kelompokBarang = {
      barang: [barang]
    }

    this.beliBarangUi.push(kelompokBarang);
  }

  tambahBeliCampuran(){
    let barang_campuran = {
      qty: 0,
      harga_jual_campuran: 0
    }

    let barangCampuran = {
      barang_campuran: [barang_campuran]
    }

    this.beliCampuranUi.push(barangCampuran);
  }

  tambahBeliPelanggan(){
    let barang_pelanggan = {
      pelanggan: '',
      kode_pelanggan: '',
      id_uniq_pelanggan: '',
      harga_jual_pelanggan: 0
    }

    let barangPelanggan = {
      barang_pelanggan: [barang_pelanggan]
    }

    this.beliPelangganUi.push(barangPelanggan);
  }

  simpan(){
    this.simpanLoading = true;
    let dataSimpan = {
      id_uniq : this.idUniq,
      kode_barang : this.kode_barang,
      kode_barcode_varian : this.kode_barcode,
      nama_barang : this.nama_barang,
      warna : this.warna,
      harga_beli: this.harga_beli,
      harga_minimum: this.harga_minimum,
      kode_kelompok : this.kelompok_data,
      //kode_pelanggan: this.pelanggane && this.pelanggane != 0? this.pelanggane.kode_pelanggan : "",
      stok: this.stok,
      hitungan : this.hitungan,
      harga_jual : this.harga_jual,
      diskon_rupiah : this.diskon,
      presentase_bonus : this.presentase_bonus,
      kode_satuan : this.satuan_data,
      jumlah : [],
      harga : [],
      qty : [],
      harga_jual_campuran : [],
      kode_pelanggan : [],
      id_uniq_pelanggan : [],
      harga_jual_pelanggan : []
    }

    this.beliBarangUi.forEach((v, i) => {
      v.barang.forEach((vv, i) => {
        dataSimpan['harga'].push(vv.harga);
        dataSimpan['jumlah'].push(vv.jumlah);
      });
    });

    this.beliCampuranUi.forEach((v, i) => {
      v.barang_campuran.forEach((vv, i) => {
        dataSimpan['qty'].push(vv.qty);
        dataSimpan['harga_jual_campuran'].push(vv.harga_jual_campuran);
      });
    });

    this.beliPelangganUi.forEach((v, i) => {
      v.barang_pelanggan.forEach((vv, i) => {
       // console.log('vv',this.pelanggane && this.pelanggane != 0? this.pelanggane.kode_pelanggan : "");
        dataSimpan['kode_pelanggan'].push(this.pelanggane && this.pelanggane != 0? this.pelanggane.kode_pelanggan : "");
        dataSimpan['id_uniq_pelanggan'].push(this.pelanggane && this.pelanggane != 0? this.pelanggane.id_uniq_pelanggan : "");
        dataSimpan['harga_jual_pelanggan'].push(vv.harga_jual_pelanggan);
      });
    });
    console.log(dataSimpan);
    this.barangService.createBarang(dataSimpan).subscribe(data => {
        setTimeout(() => this.simpanLoading = false, 3000);
        this.beliBarangUi = [];
        this.ngZone.run(() => this.router.navigateByUrl('/pages/barang/list'));

        this.pesan.showToast('top-right', 'success')
    }, (error) => {
        console.log(error);
        setTimeout(() => this.simpanLoading = false, 3000);
        this.pesan.showToast('top-right', 'danger')
    });
  }

  readKelompok(){
    this.barangService.getKelompoke().then((data) => {
     this.Kelompok = data;
    }).catch(err => {
      this.pesan.showLoadingGagal('top-right', 'danger');
      console.log(err);
    })
  }

  readSatuan(){
    this.barangService.getSatuane().then((data) => {
     this.Satuan = data;
    }).catch(err => {
      this.pesan.showLoadingGagal('top-right', 'danger');
      console.log(err);
    })
  }

  // readPelanggan(){
  //   this.barangService.getPelanggane().subscribe((data) => {
  //    this.Pelanggan = data;
  //   })
  // }

  hapusBarang(ik){
      this.beliBarangUi.splice(ik, 1);
  }

  hapusBarangCampuran(ik){
    this.beliCampuranUi.splice(ik, 1);
  }

  hapusBarangPelanggan(ik){
    this.beliPelangganUi.splice(ik, 1);
  }

  ambilidUniq(){
    this.barangService.getIdUniq().then((data) => {
      let urut;
      //let char = "FAK";
      if(!data.id_uniq){
          data.id_uniq = "0";
      }

      urut = data.id_uniq;
     //  console.log('urut'+urut);
      urut++;
      this.idUniq = urut;
    }).catch(err => {
      this.pesan.showLoadingGagal('top-right', 'danger');
      console.log(err);
    });
  }

  getServerResponse(event) {

    this.isLoadingResult = true;

    this.barangService.getPelanggane(event).subscribe((data) => {
     // this.data = data;
     console.log('data',data);
     if (data['Search'] == undefined) {
        console.log("gak iso");
        this.data = [];
        this.errorMsg = data['Error'];
      } else {
        console.log("iso");
        this.data = data['Search'];
      }

      this.isLoadingResult = false;
     })



  }

  searchCleared() {
    console.log('searchCleared');
    this.data = [];
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }

  openModalPelangan(){
    //console.log('modal');
    this.showModalPelanggan = true;
  }

  ambilDataPelanggan(){
    this.posService.getDataPelanggan().then(data => {
      this.dataPelanggan = data;
      this.dataPelangganUi = data;
      console.log(this.dataPelangganUi);
    }).catch(err => {
      this.pesan.showLoadingGagal('top-right', 'danger');
      console.log(err);
    })
  }

  cariPelanggan(){
    this.dataPelangganUi = this.dataPelanggan.filter(v => {
      return v.nama_pelanggan.toLowerCase().includes(this.textCariPelanggan.toLowerCase()) || v.kode_pelanggan.toLowerCase().includes(this.textCariPelanggan.toLowerCase()) || v.no_telp.toLowerCase().includes(this.textCariPelanggan.toLowerCase());
    })
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

  modalPelangganOk(){

    this.pelanggane = this.pelangganUi;

    this.showModalPelanggan = false;
  }
}
