import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  writeLog(logTest) {
    console.log(logTest);
  }

}
