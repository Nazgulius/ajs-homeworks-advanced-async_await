import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise(function(resolve, reject) {
      read().then(data => {
        return json(data);
      })
      .then(parsedData => {  
        resolve(parsedData); 
      })  
      .catch(error => {  
        reject(error); 
      }); 
    });
  }
}