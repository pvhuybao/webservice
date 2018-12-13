import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../models/order';
import { AccountService } from '../services/account.service';
import { UserModel } from 'src/app/models/user';
import { CartService } from '../services/cart.service';
import { OrderDetailModel } from '../../models/orderDetail';
import { OrderService } from '../services/order.service';
import { OrderDetailService } from '../services/order-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private cartService: CartService,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  public order = new OrderModel();
  user = new UserModel;
  public total: number = 0;
  public saleVip: number = 0;
  public address: string = "";

  ngOnInit() {
    this.accountService.getUserSession().subscribe(data => {
      this.user = data
      this.get();
    })
  }

  Checkout() {
    var d = new Date();
    this.order.status = 1;
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    this.order.date = year + "-" + month + "-" + date
    this.order.address = this.address;
    this.order.userId = this.user.id;
    this.order.email = this.user.email;
    this.orderService.add(this.order).subscribe(data => {
      this.order.orderDetails.forEach(value => {
        var detail = new OrderDetailModel;
        detail.idOrder = data.id;
        detail.idProduct = value.idProduct;
        detail.nameProduct = value.nameProduct
        detail.quantity = value.quantity;
        detail.price = value.price
        detail.totalPrice = value.quantity * value.price;
        var product = new ProductModel;
        product.quantity = value.quantity;
        this.orderDetailService.add(detail).subscribe(() => {
          this.productService.updateQuantity(value.idProduct, product).subscribe(() => {
            this.router.navigate(['/thankyou'], { relativeTo: this.route });
            this.cartService.clear();
            this.cartService.inited();
          })

        })
      })
    })
  }

  get() {
    var total = 0;
    this.cartService.get().subscribe(x => {
      this.order.orderDetails = [];
      if (x) {
        x.forEach(value => {
          var detail = new OrderDetailModel;
          detail.idOrder = 0;
          detail.idProduct = value.product.id;
          detail.code = "";
          detail.nameProduct = value.product.name;
          detail.quantity = value.quantity;
          detail.price = value.product.salePrice;
          detail.totalPrice = value.quantity * value.product.salePrice;
          total = total + detail.totalPrice
          this.order.orderDetails.push(detail);
        })
      }
    });
    this.cartService.inited()
    this.total = total;
    // this.order.total = this.total;
    this.saleVip = this.total * this.user.vip / 100;
    this.order.total = this.total - (total * this.user.vip / 100);
  }

}
