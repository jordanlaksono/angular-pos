import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../../services/supplier.service';
import { Component, OnInit, NgZone } from '@angular/core';
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {
  submitted = false;
  supplierForm: FormGroup;
  Top:any = [];
  noSupplier;
  sprintf: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private supplierService: SupplierService
  ) {
    this.readTop();
    this.kodeSupplier();
 }

  ngOnInit() {
    this.supplierForm = this.fb.group({
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

  get myForm(){
    return this.supplierForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (!this.supplierForm.valid) {
      return false;
    } else {
      this.supplierService.createSupplier(this.supplierForm.value).subscribe(
        (res) =>{
          this.ngZone.run(() => this.router.navigateByUrl('/pages/supplier/list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

  readTop(){
    this.supplierService.getTope().subscribe((data) => {
     this.Top = data;
    })
  }

  kodeSupplier(){
    this.supplierService.getKodeSupplier().subscribe((data) => {
       let urut;
       let char = "SUPP";
        if(!data && !data[0].kode_supplier){
          data[0].kode_supplier = char+'/'+"000";
        }else{
          urut = data[0].kode_supplier.split('/')[1];
          console.log('urut'+urut);
          urut++;
          this.noSupplier = char+'/'+sprintf("%03s", urut);
        }
    });
  }

}
