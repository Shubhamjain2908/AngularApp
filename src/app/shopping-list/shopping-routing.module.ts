import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list.component';

const shoppingRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)     // .forChild() is used in all child modules
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule {

}
