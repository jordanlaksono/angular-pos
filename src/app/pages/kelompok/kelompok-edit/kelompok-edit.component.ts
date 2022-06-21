import { Component, OnInit } from '@angular/core';
import { Kelompok } from '../../../models/Kelompok';
import { ActivatedRoute, Router } from "@angular/router";
import { KelompokService } from '../../../services/kelompok.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-kelompok-edit',
  templateUrl: './kelompok-edit.component.html',
  styleUrls: ['./kelompok-edit.component.css']
})
export class KelompokEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  kelompokData: Kelompok[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private kelompokService: KelompokService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateKelompok();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getKelompok(id);
    this.editForm = this.fb.group({
      kode_kelompok: ['', [Validators.required]],
      nama_kelompok: ['', [Validators.required]],
    })
  }

  getKelompok(id) {
    this.kelompokService.getKelompok(id).subscribe(data => {
      this.editForm.setValue({
        kode_kelompok: data['kode_kelompok'],
        nama_kelompok: data['nama_kelompok'],
      });
    });
  }

  updateKelompok() {
    this.editForm = this.fb.group({
      kode_kelompok: ['', [Validators.required]],
      nama_kelompok: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.kelompokService.updateKelompok(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/pages/kelompok/list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
