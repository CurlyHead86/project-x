import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(productId) {
    this.items.splice(productId,1);
  }

  getItems() {
    return this.items;
    
  }

  getCount(product) {
    return this.items.filter(product).length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}