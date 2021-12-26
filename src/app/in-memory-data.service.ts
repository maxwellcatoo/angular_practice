// import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// @Injectable({ 
//   providedIn: 'root'
// })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 11, name: 'Way Lau'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id :14, name: 'Celeritas'}
    ]
    return {users}
  }
}
