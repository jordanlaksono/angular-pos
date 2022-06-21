import { Component, OnInit } from '@angular/core';
import { Top } from '../../../models/Top';
import { ActivatedRoute, Router } from "@angular/router";
import { TopService } from '../../../services/top.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-top-edit',
  templateUrl: './top-edit.component.html',
  styleUrls: ['./top-edit.component.css']
})
export class TopEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  topData: Top[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private topService: TopService,
    private router: Router
  ) { }

  ngOnInit() {
    this.updateTop();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getTop(id);
    this.editForm = this.fb.group({
      kode_top: ['', [Validators.required]],
      nama_top: ['', [Validators.required]],
    })
  }

  getTop(id) {
    this.topService.getTop(id).subscribe(data => {
      this.editForm.setValue({
        kode_top: data['kode_top'],
        nama_top: data['nama_top'],
      });
    });
  }

  updateTop() {
    this.editForm = this.fb.group({
      kode_top: ['', [Validators.required]],
      nama_top: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.topService.updateTop(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/pages/top/list');
            console.log('Content updated successfully!');
          }, (error) => {
            console.log(error);
          });
      }
    }
  }

}
