import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SatuanService } from '../../../services/satuan.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-satuan-create',
  templateUrl: './satuan-create.component.html',
  styleUrls: ['./satuan-create.component.css']
})
export class SatuanCreateComponent implements OnInit {

  submitted = false;
  satuanForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private satuanService: SatuanService
  ) { }

  ngOnInit() {
    this.satuanForm = this.fb.group({
      kode_satuan: ['', [Validators.required]],
      nama_satuan: ['', [Validators.required]]
    })
  }

  get myForm(){
    return this.satuanForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (!this.satuanForm.valid) {
      return false;
    } else {
      this.satuanService.createSatuan(this.satuanForm.value).subscribe(
        (res) =>{
          this.ngZone.run(() => this.router.navigateByUrl('/pages/satuan/list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
