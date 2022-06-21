import { Component, OnInit } from '@angular/core';
import { PelangganService } from '../../../services/pelanggan.service';
import { PesanService } from '../../../providers/pesan.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-pelanggan-list',
  templateUrl: './pelanggan-list.component.html',
  styleUrls: ['./pelanggan-list.component.css']
})
export class PelangganListComponent implements OnInit {

  Pelanggan:any = [];
  loading = false;
  constructor(
    private pelangganService: PelangganService,
    private toastrService: NbToastrService,
    private pesan: PesanService
  ) { this.readPelanggan(); }

  ngOnInit() {
  }

  readPelanggan(){
    this.loading = true;
    this.pelangganService.getPelanggane().subscribe((data) => {
      this.loading = false;
      this.Pelanggan = data;
    }, (error) => {
       console.log(error);
       this.loading = false;
       this.pesan.showLoadingGagal('top-right', 'danger');
    });
  }

  removePelanggan(pelanggan, index) {
    if(window.confirm('Are you sure?')) {
        this.pelangganService.deletePelanggan(pelanggan._id).subscribe((data) => {
          this.Pelanggan.splice(index, 1);
        }
      )
    }
  }

}
