import { Component, OnInit } from '@angular/core';
import { Pelanggan } from '../../../models/Pelanggan';
import { ActivatedRoute, Router } from "@angular/router";
import { PelangganService } from '../../../services/pelanggan.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PesanService } from '../../../providers/pesan.service';

@Component({
  selector: 'app-pelanggan-edit',
  templateUrl: './pelanggan-edit.component.html',
  styleUrls: ['./pelanggan-edit.component.css']
})
export class PelangganEditComponent implements OnInit {

  loading = false;
  submitted = false;
  editForm: FormGroup;
  pelangganData: Pelanggan[];
  Top:any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private pelangganService: PelangganService,
    private router: Router,
    private pesan: PesanService
  ) {
    this.readTop();
   }

  ngOnInit() {
    this.updatePelanggan();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPelanggan(id);
    this.editForm = this.fb.group({
      id_uniq_pelanggan: ['', [Validators.required]],
      kode_pelanggan: ['', [Validators.required]],
      nama_pelanggan: ['', [Validators.required]],
      nama_toko: ['', [Validators.required]],
      alamat: ['', [Validators.required]],
      no_telp: ['', [Validators.required]],
      no_telp2: ['', [Validators.required]],
      no_telp3: ['', [Validators.required]],
      email: ['', [Validators.required]],
      kota: ['', [Validators.required]],
      kode_pos: ['', [Validators.required]],
      kode_top: ['', [Validators.required]],
      sts: ['', [Validators.required]],
    })
  }

  getPelanggan(id) {
    this.pelangganService.getPelanggan(id).subscribe(data => {
      this.editForm.setValue({
        kode_pelanggan: data['kode_pelanggan'],
        id_uniq_pelanggan: data['id_uniq_pelanggan'],
        nama_pelanggan: data['nama_pelanggan'],
        nama_toko: data['nama_toko'],
        alamat: data['alamat'],
        no_telp: data['no_telp'],
        no_telp2: data['no_telp2'],
        no_telp3: data['no_telp3'],
        email: data['email'],
        kota: data['kota'],
        kode_pos: data['kode_pos'],
        kode_top: data['kode_top'],
        sts: data['sts'],
      });
    });
  }

  updatePelanggan() {
    this.editForm = this.fb.group({
      id_uniq_pelanggan: ['', [Validators.required]],
      kode_pelanggan: ['', [Validators.required]],
      nama_pelanggan: ['', [Validators.required]],
      nama_toko: ['', [Validators.required]],
      alamat: ['', [Validators.required]],
      no_telp: ['', [Validators.required]],
      no_telp2: ['', [Validators.required]],
      no_telp3: ['', [Validators.required]],
      email: ['', [Validators.required]],
      kota: ['', [Validators.required]],
      kode_pos: ['', [Validators.required]],
      kode_top: ['', [Validators.required]],
      sts: ['', [Validators.required]],
    })
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

   onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.pelangganService.updatePelanggan(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/pages/pelanggan/list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
