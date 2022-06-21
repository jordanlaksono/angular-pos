import { Component, OnInit } from '@angular/core';
import { KelompokService } from '../../../services/kelompok.service';

@Component({
  selector: 'app-kelompok-list',
  templateUrl: './kelompok-list.component.html'
})
export class KelompokListComponent implements OnInit {

  Kelompok:any = [];

  constructor(private kelompokService: KelompokService) { this.readKelompok(); }

  ngOnInit() {
  }

  readKelompok(){
    this.kelompokService.getKelompoks().subscribe((data) => {
     this.Kelompok = data;
    })
  }

  removeKelompok(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.kelompokService.deleteKelompok(employee._id).subscribe((data) => {
          this.Kelompok.splice(index, 1);
        }
      )
    }
  }

}
