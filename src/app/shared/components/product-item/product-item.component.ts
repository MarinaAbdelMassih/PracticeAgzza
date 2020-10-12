import {Component, OnInit} from '@angular/core';
import {CollectionsService} from '../../../core/services/collections.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  colle;

  constructor(private coll: CollectionsService) {
    this.coll.getcollections().subscribe((d) => {
      this.colle = d;
      console.log(this.colle);
    });
  }


  ngOnInit(): void {
  }

}
