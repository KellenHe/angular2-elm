import { Component, OnInit } from '@angular/core';

import { Shopping } from '../../entities/shopping/shopping';
import { HomeService } from '../home.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html',
    styleUrls: ['shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    shopInfoList: Array<Shopping>;
    private imagePath = '//fuss10.elemecdn.com/{image_path}?imageMogr2/thumbnail/140x140/format/webp/quality/85';

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
        this.shopInfoList = new Array<Shopping>();
        this.getShoppingList();
    }


    private getShoppingList() {
        this.homeService.getShoppingList().subscribe(
            datas => {
                if (datas && datas.length > 0) {
                    datas.forEach(
                        data => {
                            const shopInfo = new Shopping();
                            shopInfo.assign(data);
                            let imageInfo: string = shopInfo.image_path.substr(0, 1) + '/' +
                                            shopInfo.image_path.substr(1, 2) + '/' +
                                            shopInfo.image_path.substr(3, shopInfo.image_path.length - 3);
                            const imageType = shopInfo.image_path.substr(shopInfo.image_path.length - 3, 3);
                            if (imageType === 'png') {
                                imageInfo += '.png';
                            } else {
                                imageInfo += '.jpeg';
                            }
                            shopInfo.image_path = this.imagePath.replace('{image_path}', imageInfo);
                            this.shopInfoList.push(shopInfo);
                        }
                    );
                }
            }
        );
    }
}
