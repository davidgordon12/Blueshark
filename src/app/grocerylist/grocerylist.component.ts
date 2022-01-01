import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.scss']
})
export class GrocerylistComponent implements OnInit {

  pageTitle: string = "Grocery List";

  quantityCtrl: FormControl = new FormControl(null, Validators.required);
  itemCtrl: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(14)]);


  ctrlGroup: FormGroup = new FormGroup({ 
    quantity: this.quantityCtrl,
    items: this.itemCtrl
   });

  constructor(public datastore: DatastoreService) { }

  ngOnInit(): void {
  }

  onItemClick(index: number)
  {
    this.datastore.removeFromCart(index);
  }

  onSubmit(event: Event) {
    if(this.ctrlGroup.valid) {
      this.datastore.addToBag(`${this.quantityCtrl.value} x ${this.itemCtrl.value}`);
      this.datastore.addPurchase(`${this.quantityCtrl.value} x ${this.itemCtrl.value}`);
      (event.currentTarget as HTMLFormElement).reset();
    }
  }

}
