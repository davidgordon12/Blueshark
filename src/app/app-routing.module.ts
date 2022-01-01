import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { PurchasehistoryComponent } from './purchasehistory/purchasehistory.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'grocerylist',
    pathMatch: 'full'
  },
  {
    path: 'grocerylist',
    component: GrocerylistComponent
  },
  {
    path: 'purchasehistory',
    component: PurchasehistoryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
