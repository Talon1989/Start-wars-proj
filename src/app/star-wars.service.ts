
import {LogService} from './log.service';
import {Injectable} from '@angular/core';

@Injectable()
export class StarWarsService {

  private characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((c) => {
      return c.side === chosenList;
    });
  }

  onSideChosen(cInfo) {
    const pos = this.characters.findIndex((c) => {
      return c.name === cInfo.name;
    });
    this.characters[pos].side = cInfo.side;
    this.logService.writeLog('Changed side of ' + cInfo.name +
      ' , new side: ' + cInfo.side);
  }

  addCharacter(name, side) {
    if (this.characters.find( c => c.name === name)) { return; }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }

}
