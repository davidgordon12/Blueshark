import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.scss']
})
export class PurchasehistoryComponent implements OnInit {

  pageTitle: string = "Purchase History";

  constructor(public datastore: DatastoreService) { }

  ngOnInit(): void {
  }

}
