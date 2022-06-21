import { Component, OnInit } from '@angular/core';
import { Satuan } from '../../../models/Satuan';
import { ActivatedRoute, Router } from "@angular/router";
import { SatuanService } from '../../../services/satuan.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-satuan-edit',
  templateUrl: './satuan-edit.component.html',
  styleUrls: ['./satuan-edit.component.css']
})
export class SatuanEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  satuanData: Satuan[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private satuanService: SatuanService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateSatuan();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getSatuan(id);
    this.editForm = this.fb.group({
      kode_satuan: ['', [Validators.required]],
      nama_satuan: ['', [Validators.required]],
    })
  }

  getSatuan(id) {
    this.satuanService.getSatuan(id).subscribe(data => {
      this.editForm.setValue({
        kode_satuan: data['kode_satuan'],
        nama_satuan: data['nama_satuan'],
      });
    });
  }

  updateSatuan() {
    this.editForm = this.fb.group({
      kode_satuan: ['', [Validators.required]],
      nama_satuan: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.satuanService.updateSatuan(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/pages/satuan/list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
