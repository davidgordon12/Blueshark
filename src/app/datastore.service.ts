import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  itemList: string[] = [];
  private purchaseHistory: string[] = [];

  constructor() { }

  addToBag(bag: string){
    this.itemList.push(bag),
    this.saveChanges();
  }

  addPurchase(purchase: string){
    this.purchaseHistory.push(purchase),
    this.saveChanges();
  }

  removeFromCart(i: number)
  {
    this.itemList.splice(i, 1);
    this.saveChanges();
  }

  getCart()
  {
    return(this.itemList)
  }

  getPurchases()
  {
    return(this.purchaseHistory)
  }

  private saveChanges()
  {
    window.localStorage.setItem('itemList', JSON.stringify(this.itemList));
    window.localStorage.setItem('purchaseHistory', JSON.stringify(this.purchaseHistory));
  }
}

