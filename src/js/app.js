// TODO: write your code here
import GameSavingLoader from './GameSavingLoader.js';

console.log('Работает');

(async () => {
  try {
    console.log(await GameSavingLoader.load()); 
  } catch (error) {
    console.error(error);
  }
})();