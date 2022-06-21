import { Component, OnInit } from '@angular/core';
import { BarangService } from '../../../services/barang.service';

@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})
export class BarangListComponent implements OnInit {

  Barang:any = [];

  constructor(private barangService: BarangService) { this.readBarang(); }

  ngOnInit() {
  }

  readBarang(){
    this.barangService.getBarange().subscribe((data) => {
     this.Barang = data;
    })
  }

  removeBarang(barang, index) {
    if(window.confirm('Are you sure?')) {
        this.barangService.deleteBarang(barang._id).subscribe((data) => {
          this.Barang.splice(index, 1);
        }
      )
    }
  }

}
