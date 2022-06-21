import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopService } from '../../../services/top.service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-top-create',
  templateUrl: './top-create.component.html',
  styleUrls: ['./top-create.component.css']
})
export class TopCreateComponent implements OnInit {

  submitted = false;
  topForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private topService: TopService
  ) { }

  ngOnInit() {
    this.topForm = this.fb.group({
      kode_top: ['', [Validators.required]],
      nama_top: ['', [Validators.required]]
    })
  }

  get myForm(){
    return this.topForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (!this.topForm.valid) {
      return false;
    } else {
      this.topService.createTop(this.topForm.value).subscribe(
        (res) =>{
          this.ngZone.run(() => this.router.navigateByUrl('/pages/top/list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
