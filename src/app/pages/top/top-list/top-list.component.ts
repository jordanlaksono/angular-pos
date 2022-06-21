import { Component, OnInit } from '@angular/core';
import { TopService } from '../../../services/top.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {

  Top:any = [];

  constructor(private topService: TopService) { this.readTop(); }

  ngOnInit() {
  }

  readTop(){
    this.topService.getTops().subscribe((data) => {
    console.log(data);
     this.Top = data;
    })
  }

  removeTop(top, index) {
    if(window.confirm('Are you sure?')) {
        this.topService.deleteTop(top._id).subscribe((data) => {
          this.Top.splice(index, 1);
        }
      )
    }
  }

}
