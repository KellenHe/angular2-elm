import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeService } from './home.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [HomeService]
})
export class HomeModule {}
