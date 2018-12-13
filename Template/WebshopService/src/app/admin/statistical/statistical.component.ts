import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StatisticalService } from '../services/statistical.service';
import { ImportBillModel } from '../../models/importBill';
import { OrderModel } from '../../models/order';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private statisticalService: StatisticalService
  ) { }

  public listOrder: OrderModel[];
  public listImport: ImportBillModel[];
  public startDate: any;
  public endDate: any;
  public totalOrder: number = 0;
  public totalImport: number = 0;
  public total: number = 0;

  ngOnInit() {
  }

  Run() {
    this.statisticalService.getOrder(this.startDate, this.endDate).subscribe(data => {
      this.listOrder = data;
      var total = 0;
      data.forEach(x => {
        total = Number(total) + Number(x.total);
      })
      this.totalOrder = total;

      this.statisticalService.getImport(this.startDate, this.endDate).subscribe(data1 => {
        this.listImport = data1;
        var total2 = 0;
        data1.forEach(x => {
          total2 = Number(total2) + Number(x.total);
        })
        this.totalImport = total2;
        this.total = this.totalOrder - this.totalImport;
      })
    })   
  }

}
