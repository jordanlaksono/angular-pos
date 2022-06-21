import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KelompokService } from '../../../services/kelompok.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-kelompok-create',
  templateUrl: './kelompok-create.component.html',
  styleUrls: ['./kelompok-create.component.css']
})
export class KelompokCreateComponent implements OnInit {
  submitted = false;
  kelompokForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private kelompokService: KelompokService
  ) { }

  ngOnInit() {
    this.kelompokForm = this.fb.group({
      kode_kelompok: ['', [Validators.required]],
      nama_kelompok: ['', [Validators.required]]
    })
  }

  get myForm(){
    return this.kelompokForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (!this.kelompokForm.valid) {
      return false;
    } else {
      this.kelompokService.createKelompok(this.kelompokForm.value).subscribe(
        (res) =>{
          this.ngZone.run(() => this.router.navigateByUrl('/pages/kelompok/list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
