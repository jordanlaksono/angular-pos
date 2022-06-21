import { Component, OnInit } from '@angular/core';
import { PegawaiService } from '../../../services/pegawai.service';
import { PesanService } from '../../../providers/pesan.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-pegawai-list',
  templateUrl: './pegawai-list.component.html',
  styleUrls: ['./pegawai-list.component.css']
})
export class PegawaiListComponent implements OnInit {

  Pegawai:any = [];
  loading = false;

  constructor(
    private pegawaiService: PegawaiService,
    private pesan : PesanService,
    private toastrService: NbToastrService
    ) { this.readPegawai(); }

  ngOnInit() {
  }

  readPegawai(){
    this.loading = true;
    this.pegawaiService.getPegawaie().subscribe((data) => {
      this.loading = false;
      this.Pegawai = data;
    }, (error) => {
      console.log(error);
      this.loading = false;
      this.pesan.showLoadingGagal('top-right', 'danger');
   })
  }

  removePegawai(pegawai, index) {
    if(window.confirm('Are you sure?')) {
        this.pegawaiService.deletePegawai(pegawai._id).subscribe((data) => {
          this.Pegawai.splice(index, 1);
        }
      )
    }
  }

}
