import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DescriptionsComponent } from './products-details/descriptions/descriptions.component';
import { ImageViewerComponent } from './products-details/image-viewer/image-viewer.component';
import { ItemDetailsComponent } from './products-details/item-details/item-details.component';
import { MainInfoComponent } from './products-details/main-info/main-info.component';
import { ProductTabsComponent } from './products-details/product-tabs/product-tabs.component';
import { RatingComponent } from './products-details/rating/rating.component';
import { ReviewItemComponent } from './products-details/review-item/review-item.component';
import { ReviewsComponent } from './products-details/reviews/reviews.component';
import { FilterComponent } from './products-list/filter/filter.component';
import { FilterDialogComponent } from './products-list/filter-dialog/filter-dialog.component';
import { ProductFilterComponent } from './products-list/product-filter/product-filter.component';
import { ProductListHeaderComponent } from './products-list/product-list-header/product-list-header.component';
import { RangeSliderComponent } from './products-list/range-slider/range-slider.component';
import { SortingComponent } from './products-list/sorting/sorting.component';
import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
  declarations: [DescriptionsComponent, ImageViewerComponent, ItemDetailsComponent, MainInfoComponent, ProductTabsComponent, RatingComponent, ReviewItemComponent, ReviewsComponent, FilterComponent, FilterDialogComponent, ProductFilterComponent, ProductListHeaderComponent, RangeSliderComponent, SortingComponent, ProductsListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
