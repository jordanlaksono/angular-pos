import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../../models/Supplier';
import { ActivatedRoute, Router } from "@angular/router";
import { SupplierService } from '../../../services/supplier.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  supplierData: Supplier[];
  Top:any = [];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private supplierService: SupplierService,
    private router: Router
  ) { this.readTop(); }

  ngOnInit() {
    this.updateSupplier();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getSupplier(id);
    this.editForm = this.fb.group({
      kode_supplier: ['', [Validators.required]],
      nama_supplier: ['', [Validators.required]],
      alamat: ['', [Validators.required]],
      kota: ['', [Validators.required]],
      kode_pos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      no_telp_1: ['', [Validators.required]],
      no_telp_2: ['', [Validators.required]],
      no_telp_3: ['', [Validators.required]],
      atas_nama_rekening: ['', [Validators.required]],
      no_rekening: ['', [Validators.required]],
      catatan: ['', [Validators.required]],
      kode_top: ['', [Validators.required]]
    })

  }

  getSupplier(id) {
    this.supplierService.getSupplier(id).subscribe(data => {
      this.editForm.setValue({
        kode_supplier: data['kode_supplier'],
        nama_supplier: data['nama_supplier'],
        alamat: data['alamat'],
        kota: data['kota'],
        kode_pos: data['kode_pos'],
        email: data['email'],
        no_telp_1: data['no_telp_1'],
        no_telp_2: data['no_telp_2'],
        no_telp_3: data['no_telp_3'],
        atas_nama_rekening: data['atas_nama_rekening'],
        no_rekening: data['no_rekening'],
        catatan: data['catatan'],
        kode_top: data['kode_top'],
      });
    });
  }

  updateSupplier() {
    this.editForm = this.fb.group({
      kode_supplier: ['', [Validators.required]],
      nama_supplier: ['', [Validators.required]],
      alamat: ['', [Validators.required]],
      kota: ['', [Validators.required]],
      kode_pos: ['', [Validators.required]],
      email: ['', [Validators.required]],
      no_telp_1: ['', [Validators.required]],
      no_telp_2: ['', [Validators.required]],
      no_telp_3: ['', [Validators.required]],
      atas_nama_rekening: ['', [Validators.required]],
      no_rekening: ['', [Validators.required]],
      catatan: ['', [Validators.required]],
      kode_top: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.supplierService.updateSupplier(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/pages/supplier/list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

  readTop(){
    this.supplierService.getTope().subscribe((data) => {
     this.Top = data;
    })
  }

}
