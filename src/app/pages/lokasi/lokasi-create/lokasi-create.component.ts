import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LokasiService } from '../../../services/lokasi.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-lokasi-create',
  templateUrl: './lokasi-create.component.html',
  styleUrls: ['./lokasi-create.component.css']
})
export class LokasiCreateComponent implements OnInit {

  submitted = false;
  lokasiForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private lokasiService: LokasiService
  ) { }

  ngOnInit() {
    this.lokasiForm = this.fb.group({
      id_lokasi: ['', [Validators.required]],
      nama_lokasi: ['', [Validators.required]]
    })
  }

  get myForm(){
    return this.lokasiForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (!this.lokasiForm.valid) {
      return false;
    } else {
      this.lokasiService.createLokasi(this.lokasiForm.value).subscribe(
        (res) =>{
          this.ngZone.run(() => this.router.navigateByUrl('/pages/lokasi/list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
