import { Component, OnInit } from '@angular/core';
import { LokasiService } from '../../../services/lokasi.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-lokasi-list',
  templateUrl: './lokasi-list.component.html',
  styleUrls: ['./lokasi-list.component.css']
})
export class LokasiListComponent implements OnInit {

  Lokasi:any = [];

  constructor(
    private lokasiService: LokasiService,
    private router: Router
    ) { this.readLokasi(); }

  ngOnInit() {
  }

  readLokasi(){
    this.lokasiService.getLokasis().subscribe((data) => {
     this.Lokasi = data;
    })
  }

  removeLokasi(lokasi, index) {
    if(window.confirm('Are you sure?')) {
        this.lokasiService.deleteLokasi(lokasi._id).subscribe((data) => {
          this.Lokasi.splice(index, 1);
        }
      )
    }
  }

}
