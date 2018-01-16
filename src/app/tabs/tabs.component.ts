import { Component, OnInit } from '@angular/core';
import {StarWarsService} from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  // characters = [
  //   {name: 'Luke Skywalker', side: ''},
  //   {name: 'Darth Vader', side: ''}
  // ];

  characters = [];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  getCharacters() {
    const starWarsService = new StarWarsService();
    this.characters = starWarsService.getCharacters(this.chosenList);
    return this.characters;
  }


  onChoose(side) {
    this.chosenList = side;
  }


}
