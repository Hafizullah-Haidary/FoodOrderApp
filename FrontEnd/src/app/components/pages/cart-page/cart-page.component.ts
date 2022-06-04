import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItems } from 'src/app/shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
  constructor(private cartService:CartService) {
    this.cartService.getCartObserable().subscribe((cart)=>{
      this.cart=cart;
    })
   }

  ngOnInit(): void {
  }
  removeCartItem(cartItem:CartItems){
    this.cartService.removeCartItem(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItems,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
  }

}
