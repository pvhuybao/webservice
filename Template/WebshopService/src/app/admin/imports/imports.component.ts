import { Component, OnInit } from '@angular/core';
import { ImportService } from '../services/import.service';
import { ImportBillModel } from '../../models/importBill';

@Component({
  selector: 'app-imports',
  templateUrl: './imports.component.html',
  styleUrls: ['./imports.component.css']
})
export class ImportsComponent implements OnInit {

  listImports: ImportBillModel[];

  constructor(
    private importService: ImportService,
  ) { }

  ngOnInit() {
    this.getListImport()
  }

  getListImport(): void{
    this.importService.get().subscribe(data => {
      this.listImports = data;
    })
  }

  delete(detail): void {
    this.importService.delete(detail).subscribe(data => {
      this.getListImport();
    })
  }

}
