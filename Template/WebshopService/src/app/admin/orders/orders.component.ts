import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { OrderModel, OrderStatus } from '../../models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  listOrders: OrderModel[];
  public status = OrderStatus;

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    this.getListOrder();
  }

  getListOrder(): void{
    this.orderService.get().subscribe(data => {
      this.listOrders = data;
    })
  }

  delete(order): void {
    this.orderService.delete(order).subscribe(data => {
      this.getListOrder();
    })
  }

}
