import { Component, OnInit } from '@angular/core';

import { Shopping } from '../../entities/shopping/shopping';
import { HomeService } from '../home.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html',
    styleUrls: ['shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    // 商铺列表
    shopInfoList: Array<Shopping>;
    // 商铺图片地址
    private imagePath = '//fuss10.elemecdn.com/{image_path}?imageMogr2/thumbnail/140x140/format/webp/quality/85';
    starRate: number;

    constructor(private homeService: HomeService) {}

    ngOnInit(): void {
        this.shopInfoList = new Array<Shopping>();
        this.getShoppingList();
    }

    // 获取商铺列表
    private getShoppingList() {
        this.homeService.getShoppingList().subscribe(
            datas => {
                if (datas && datas.length > 0) {
                    datas.forEach(
                        data => {
                            const shopInfo = new Shopping();
                            shopInfo.assign(data);
                            // 图片地址拼接
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
                            // 活动数据排序显示
                            shopInfo.supports.sort((support1, support2) => {
                                if (support1.id > support2.id) {
                                    return -1;
                                }
                                return 1;
                            });
                            this.shopInfoList.push(shopInfo);
                        }
                    );
                }
            }
        );
    }
}
