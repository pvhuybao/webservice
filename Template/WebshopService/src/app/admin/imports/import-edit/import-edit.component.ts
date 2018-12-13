import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImportDetailService } from '../../services/import-detail.service';
import { ImportService } from '../../services/import.service';
import { ImportBillModel } from 'src/app/models/importBill';
import { ImportBillDetailModel } from 'src/app/models/importBillDetail';

@Component({
  selector: 'app-import-edit',
  templateUrl: './import-edit.component.html',
  styleUrls: ['./import-edit.component.css']
})
export class ImportEditComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private importService: ImportService,
    private importDetailService: ImportDetailService
  ) { }

  public id: string;
  public importBill: ImportBillModel;
  public listDetail: ImportBillDetailModel[];

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;

    this.getImportBill(this.id);
    this.getImportBillDetail(this.id);
  }

  getImportBill(id) {
    this.importService.getById(id).subscribe(data => {
      this.importBill = data;
    })
  }

  getImportBillDetail(id) {
    this.importDetailService.get(id).subscribe(data => {
      this.listDetail = data
    })
  }

}
