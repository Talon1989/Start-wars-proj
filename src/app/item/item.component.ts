import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAssign(side) {
    console.log('ITEM: ' + side);
    const starWarsService = new StarWarsService();
    starWarsService.onSideChosen({name: this.character.name, side: side});
  }
}
