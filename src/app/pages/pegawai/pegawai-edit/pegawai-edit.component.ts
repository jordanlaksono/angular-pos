import { Component, OnInit } from '@angular/core';
import { Pegawai } from '../../../models/Pegawai';
import { ActivatedRoute, Router } from "@angular/router";
import { PegawaiService } from '../../../services/pegawai.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-pegawai-edit',
  templateUrl: './pegawai-edit.component.html',
  styleUrls: ['./pegawai-edit.component.css']
})
export class PegawaiEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  pegawaiData: Pegawai[];
  Lokasi:any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private pegawaiService: PegawaiService,
    private router: Router
  ) {
    this.readLokasi();
  }

  ngOnInit() {
    this.updatePegawai();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getPegawai(id);
    this.editForm = this.fb.group({
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
    })
  }

  getPegawai(id) {
    this.pegawaiService.getPegawai(id).subscribe(data => {
      this.editForm.setValue({
        kode_karyawan: data['kode_karyawan'],
        nama_karyawan: data['nama_karyawan'],
        alamat: data['alamat'],
        kota: data['kota'],
        kode_pos: data['kode_pos'],
        no_telp: data['no_telp'],
        email: data['email'],
        id_lokasi: data['id_lokasi'],
        status: data['status'],
        gaji_karyawan: data['gaji_karyawan']
      });
    });
  }

  updatePegawai() {
    this.editForm = this.fb.group({
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
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.pegawaiService.updatePegawai(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/pages/pegawai/list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

  readLokasi(){
    this.pegawaiService.getLokasie().subscribe((data) => {
     this.Lokasi = data;
    })
  }



}
