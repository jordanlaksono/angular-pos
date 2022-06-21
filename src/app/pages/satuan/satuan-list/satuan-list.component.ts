import { Component, OnInit } from '@angular/core';
import { SatuanService } from '../../../services/satuan.service';

@Component({
  selector: 'app-satuan-list',
  templateUrl: './satuan-list.component.html',
  styleUrls: ['./satuan-list.component.css']
})
export class SatuanListComponent implements OnInit {

  Satuan:any = [];

  constructor(private satuanService: SatuanService) { this.readSatuan(); }

  ngOnInit() {
  }

  readSatuan(){
    this.satuanService.getSatuans().subscribe((data) => {
     this.Satuan = data;
    })
  }

  removeSatuan(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.satuanService.deleteSatuan(employee._id).subscribe((data) => {
          this.Satuan.splice(index, 1);
        }
      )
    }
  }

}
