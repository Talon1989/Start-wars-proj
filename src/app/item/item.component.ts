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

  starWarsService: StarWarsService;

  // DEPENDENCY INJECTION
  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    this.starWarsService.onSideChosen({name: this.character.name, side: side});
  }
}
