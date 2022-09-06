//common js syntax, don't use it
// const emoji = require('node-emoji');

//right way --> using ES js syntax
import emoji from 'node-emoji';
import { argv } from 'process';

if (argv[2] && emoji.find(argv[2])) {
  console.log(emoji.get(argv[2]));
} else if (argv[2]) {
  console.log(emoji.get('cry') + " emoji '" + argv[2] + "' couldn't be found");
} else {
  console.log(emoji.random().emoji);
}
