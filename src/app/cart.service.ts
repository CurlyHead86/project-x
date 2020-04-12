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

  clearCart() {
    this.items = [];
    return this.items;
  }

}