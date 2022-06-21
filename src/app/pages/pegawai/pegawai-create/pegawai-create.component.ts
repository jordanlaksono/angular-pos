import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PegawaiService } from '../../../services/pegawai.service';
import { Component, OnInit, NgZone } from '@angular/core';
import {sprintf} from "sprintf-js";
@Component({
  selector: 'app-pegawai-create',
  templateUrl: './pegawai-create.component.html',
  styleUrls: ['./pegawai-create.component.css']
})
export class PegawaiCreateComponent implements OnInit {
  submitted = false;
  pegawaiForm: FormGroup;
  Lokasi:any = [];
  noNota;
  sprintf: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private pegawaiService: PegawaiService
  ) {
    this.readLokasi();
    this.kodePegawai();
  }

  ngOnInit() {
    this.pegawaiForm = this.fb.group({
      kode_karyawan: ['', [Validators.required]],
      nama_karyawan: ['', [Validators.required]],
      alamat: ['', [Validators.required]],
      kota: ['', [Validators.required]],
      kode_pos: ['', [Validators.required]],
      no_telp: ['', [Validators.required]],
      email: ['', [Validators.required]],
      id_lokasi: ['', [Validators.required]],
      status: ['', [Validators.required]],
      gaji_karyawan: ['', [Validators.required]]
    });
  }

  get myForm(){
    return this.pegawaiForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (!this.pegawaiForm.valid) {
      return false;
    } else {
      this.pegawaiService.createPegawai(this.pegawaiForm.value).subscribe(
        (res) =>{
          this.ngZone.run(() => this.router.navigateByUrl('/pages/pegawai/list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

  readLokasi(){
    this.pegawaiService.getLokasie().subscribe((data) => {
     this.Lokasi = data;
    });
  }


  kodePegawai(){
    this.pegawaiService.getKodeKaryawan().subscribe((data) => {
      // let sprintf = require('sprintf-js').sprintf,
      // vsprintf = require('sprintf-js').vsprintf
      console.log('data',data);
       let kode = data[0].kode_karyawan,
           urut;
       let char = "USER";
      console.log('kode'+kode);
        if(!data[0].kode_karyawan){
          data[0].kode_karyawan = char+'/'+"000";
        }

      urut = data[0].kode_karyawan.split('/')[1];
      console.log('urut'+urut);
      urut++;
      this.noNota = char+'/'+sprintf("%03s", urut);


    });
  }

}
