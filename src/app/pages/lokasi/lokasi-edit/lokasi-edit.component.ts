import { Component, OnInit } from '@angular/core';
import { Lokasi } from '../../../models/Lokasi';
import { ActivatedRoute, Router } from "@angular/router";
import { LokasiService } from '../../../services/lokasi.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-lokasi-edit',
  templateUrl: './lokasi-edit.component.html',
  styleUrls: ['./lokasi-edit.component.css']
})
export class LokasiEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  lokasiData: Lokasi[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private lokasiService: LokasiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateLokasi();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getLokasi(id);
    this.editForm = this.fb.group({
      id_lokasi: ['', [Validators.required]],
      nama_lokasi: ['', [Validators.required]],
    })
  }

  getLokasi(id) {
    this.lokasiService.getLokasi(id).subscribe(data => {
      this.editForm.setValue({
        id_lokasi: data['id_lokasi'],
        nama_lokasi: data['nama_lokasi'],
      });
    });
  }

  updateLokasi() {
    this.editForm = this.fb.group({
      id_lokasi: ['', [Validators.required]],
      nama_lokasi: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.lokasiService.updateLokasi(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/pages/lokasi/list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
