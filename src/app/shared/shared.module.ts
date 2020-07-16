import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProductsComponent } from '@src/app/shared/products/products.component';
import { RouterModule } from '@angular/router';
import { RepeatPipe } from './repeat/repeat.pipe';

@NgModule({
  declarations: [ProductsComponent, RepeatPipe],
  exports: [ProductsComponent, RepeatPipe],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
})
export class SharedModule {}
