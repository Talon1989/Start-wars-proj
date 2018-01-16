import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((c) => {
      return c.side === this.chosenList;
    });
  }

  onChoose(side) {
    this.chosenList = side;
  }

  onSideChosen(cInfo) {
    console.log(cInfo.name + ' \ ' + cInfo.side);
    const pos = this.characters.findIndex((c) => {
      return c.name === cInfo.name;
    });
    this.characters[pos].side = cInfo.side;
  }
}
