
export class StarWarsService {

  private characters = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((c) => {
      return c.side === chosenList;
    });
  }

  onSideChosen(cInfo) {
    console.log(cInfo.name + ' \ ' + cInfo.side);
    const pos = this.characters.findIndex((c) => {
      return c.name === cInfo.name;
    });
    this.characters[pos].side = cInfo.side;
  }

}
