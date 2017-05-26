import { Component } from '@angular/core';

import { Shopping } from '../../entities/shopping/shopping';

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html',
    styleUrls: ['shopping-list.component.css']
})
export class ShoppingListComponent {
    shopInfoList: Shopping[];
}
