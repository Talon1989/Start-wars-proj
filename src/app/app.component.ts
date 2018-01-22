import {Component, OnInit} from '@angular/core';
import {StarWarsService} from './star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Star Wars Application';
  testName = 'fabio';
  starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
  }

  ngOnInit(): void {
    this.starWarsService.fetchCharacters();
  }
}
