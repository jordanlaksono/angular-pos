import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  Supplier:any = [];

  constructor(private supplierService: SupplierService) { this.readSupplier(); }

  ngOnInit() {
  }

  readSupplier(){
    this.supplierService.getSupplierse().subscribe((data) => {
     this.Supplier = data;
    })
  }

  removeSupplier(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.supplierService.deleteSupplier(employee._id).subscribe((data) => {
          this.Supplier.splice(index, 1);
        }
      )
    }
  }

}
