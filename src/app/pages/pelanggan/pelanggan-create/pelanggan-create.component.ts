import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PelangganService } from '../../../services/pelanggan.service';
import { Component, OnInit, NgZone } from '@angular/core';
import {sprintf} from "sprintf-js";
import { NbToastrService } from '@nebular/theme';
import { PesanService } from '../../../providers/pesan.service';

@Component({
  selector: 'app-pelanggan-create',
  templateUrl: './pelanggan-create.component.html',
  styleUrls: ['./pelanggan-create.component.css']
})
export class PelangganCreateComponent implements OnInit {

  submitted = false;
  simpanLoading = false;
  loading = false;
 // pelangganForm: FormGroup;
  Top:any = [];
  noPelanggan;
 // id_uniq_pelanggan;
  iduniqpelanggan;
  nama_pelanggan;
  nama_toko;
  alamat;
  no_telp;
  no_telp2;
  no_telp3;
  email;
  kota;
  kode_pos;
  kode_top;
  sts;
  sprintf: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private pelangganService: PelangganService,
    private toastrService: NbToastrService,
    private pesan: PesanService
  ) {
    this.readTop();
    this.kodePelanggan();
    this.ambilidUniq();
  }

  ngOnInit() {

  }

  simpan(){
    this.simpanLoading = true;
    let dataSimpan = {
      id_uniq_pelanggan : this.iduniqpelanggan,
      kode_pelanggan : this.noPelanggan,
      nama_pelanggan : this.nama_pelanggan,
      nama_toko : this.nama_toko,
      alamat : this.alamat,
      no_telp : this.no_telp,
      no_telp2 : this.no_telp2,
      no_telp3 : this.no_telp3,
      email : this.email,
      kota : this.kota,
      kode_pos : this.kode_pos,
      kode_top : this.kode_top,
      sts : this.sts
    }

    console.log('dataSimpan',dataSimpan);

    this.pelangganService.createPelanggan(dataSimpan).subscribe(data => {
        setTimeout(() => this.simpanLoading = false, 3000);
        this.pesan.showToast('top-right', 'success');
        this.ngZone.run(() => this.router.navigateByUrl('/pages/pelanggan/list'));
    }, (error) => {
        console.log(error);
        setTimeout(() => this.simpanLoading = false, 3000);
        this.pesan.showToast('top-right', 'danger');
    });
  }

  readTop(){
   // let l = this.pesan.showLoading('Memuat Data Barang');
    this.pelangganService.getTope().subscribe((data) => {
    // l.dismiss();
     this.Top = data;
    }, (error) => {
      console.log(error);
      this.loading = false;
      this.pesan.showLoadingGagal('top-right', 'danger');
    });
  }

  kodePelanggan(){
    this.loading = true;
    this.pelangganService.getKodePelanggan().then((data) => {
       this.loading = false;
       let urut;
       let char = "ML";
       console.log('data.kode_pelanggan', data[0].kode_pelanggan);
        if(!data[0].kode_pelanggan){
          data[0].kode_pelanggan = char+'-'+"000";
        }else{
          urut = data[0].kode_pelanggan.split('-')[1];
          urut++;
          this.noPelanggan = char+'-'+sprintf("%03s", urut);
        }
    }, (error) => {
      console.log(error);
      this.loading = false;
      this.pesan.showLoadingGagal('top-right', 'danger');
    });
  }

  ambilidUniq(){
    this.pelangganService.getIdUniq().then((data) => {
      let urut;
      if(!data[0].id_uniq_pelanggan){
          data[0].id_uniq_pelanggan = "0";
      }
      urut = data[0].id_uniq_pelanggan;
      urut++;
      this.iduniqpelanggan = urut;
    }, (error) => {
      console.log(error);
      this.loading = false;
      this.pesan.showLoadingGagal('top-right', 'danger');
    });
  }

}
