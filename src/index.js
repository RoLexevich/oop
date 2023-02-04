import Magician from './js/Magician';
import Daemon from './js/Daemon';
// eslint-disable-next-line no-console
const magician = new Magician('Dmitriy', 'Magician');
// eslint-disable-next-line no-console
const daemon = new Daemon('Aleks', 'Daemon');
// eslint-disable-next-line no-console
console.log(magician, daemon);
window.daemon = daemon;
