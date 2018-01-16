import { Component, OnInit } from '@angular/core';
import {StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [];
  chosenList = 'all';

  starWarsService: StarWarsService;

  // DEPENDENCY INJECTION
  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit() {
  }

  getCharacters() {
    this.characters = this.starWarsService.getCharacters(this.chosenList);
    return this.characters;
  }


  onChoose(side) {
    this.chosenList = side;
  }


}
