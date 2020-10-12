import {Component, OnInit} from '@angular/core';
import {SliderService} from '../../../core/services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  data = [];

  constructor(private serv: SliderService) {
    this.serv.getImages().subscribe((d) => {
      this.data = d.slider
      console.log(this.data)
    });
  }

  ngOnInit(): void {
  }

}
