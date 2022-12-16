import { Injectable } from '@angular/core';
import { Cart } from 'src/app/common/models/Cart';
import { CartItem } from 'src/app/common/models/CartItem';
import { Food } from 'src/app/common/models/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodID: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodID);
  }

  changeQuantity(quantity: number, foodID: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodID);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
