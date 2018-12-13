import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { OrderDetailService } from '../../services/order-detail.service';
import { OrderModel } from '../../../models/order';
import { OrderStatus } from '../../../models/order';
import { OrderDetailModel } from '../../../models/orderDetail';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService
  ) { }

  public id: string;
  public orderBill: OrderModel;
  public listDetail: OrderDetailModel[];
  public status = OrderStatus;
  public keys: Array<string>;

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;

    this.getOrder(this.id);
    this.getOrderBillDetail(this.id);
    this.keys = Object.keys(this.status).filter(Number);
  }

  getOrder(id) {
    this.orderService.getById(id).subscribe(data => {
      this.orderBill = data;
    })
  }

  getOrderBillDetail(id) {
    this.orderDetailService.get(id).subscribe(data => {
      this.listDetail = data
    })
  }

  save() {
    var order = new OrderModel;
    order.email = this.orderBill.email;
    order.address = this.orderBill.address;
    order.date = this.orderBill.date;
    order.total = this.orderBill.total;
    order.status = this.orderBill.status;

    this.orderService.update(this.orderBill.id, order).subscribe(() => {
      this.router.navigate(['/admin/orders']);
    })
  }

}
