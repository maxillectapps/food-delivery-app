import { Component,OnInit } from '@angular/core';
import { Cart } from '../common/models/Cart';
import { CartItem } from '../common/models/CartItem';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
cart!:Cart;
  constructor(private cartService:CartService,private fs:FoodService){
    // let foods=fs.getAll();
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[4]);
    // cartService.addToCart(foods[2]);
    this.setCart();
  }

  ngOnInit(): void {
   
  }

  setCart(){
    this.cart=this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }

}
