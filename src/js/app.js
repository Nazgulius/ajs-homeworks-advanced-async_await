// TODO: write your code here
import GameSavingLoader from './GameSavingLoader.js';

console.log('Работает');

GameSavingLoader.load().then(saving => { 
  console.log(saving);  
})  
.catch(error => {  
  console.log(error);  
}); 