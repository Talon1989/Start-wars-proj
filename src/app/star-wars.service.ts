
import {LogService} from './log.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';

@Injectable()
export class StarWarsService {

  private characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people').subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
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
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + cInfo.name +
      ' , new side: ' + cInfo.side);
  }

  addCharacter(name, side) {
    if (this.characters.find( c => c.name === name)) { return; }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }

}
