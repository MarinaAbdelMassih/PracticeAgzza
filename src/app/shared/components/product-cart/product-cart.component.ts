import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../../core/services/collections.service';
import { Collection } from '../../../core/interfaces/collection';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  collections: Collection[];

  constructor(
    private collectionsService: CollectionsService,
  ) {
    this.collectionsService.getCollections().subscribe((d) => {
      this.collections = d;
    });
  }

  ngOnInit(): void {
  }

}
