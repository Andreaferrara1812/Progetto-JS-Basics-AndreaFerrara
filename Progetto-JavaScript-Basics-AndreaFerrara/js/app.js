
//Prompt iniziale
let nomeUtente;
nomeUtente = prompt('Come ti chiami?');
document.getElementById('benvenuto').innerHTML = 'Benvenuto ' + nomeUtente;
//Prompt iniziale

//Counter
let btn0 = document.createElement('button');
let plus = document.createTextNode('Plus+');
btn0.appendChild(plus);
document.getElementById('btn').appendChild(btn0);
btn0.setAttribute('class', 'btn btn-danger')

let conta = document.createElement('p');
let zero = document.createTextNode(0);
conta.appendChild(zero);
document.getElementById('btn').appendChild(conta);
conta.setAttribute('id', 'contiamo');

let btn1 = document.createElement('button');
let minus = document.createTextNode('Minus-');
btn1.appendChild(minus);
document.getElementById('btn').appendChild(btn1);
btn1.setAttribute('class', 'btn btn-primary')


document.getElementById('btn').firstChild.addEventListener('click', clickPlus);
document.getElementById('btn').lastChild.addEventListener('click', clickMinus);

let count = 0;

function clickPlus(){
  count = count + 1;
  document.getElementById('contiamo').innerHTML =  count;
  switch (count) {
    case 10:
      document.getElementById('corsa').innerHTML =  'Sempre più in alto.';
      break;
      case 20:
      document.getElementById('corsa').innerHTML =  'Stiamo volandooooo.';
      break;
      case 30:
      document.getElementById('corsa').innerHTML =  'Okay, forse adesso è troppo!';
      break;
      case 0:
      document.getElementById('corsa').innerHTML =  'Arrivati.';
      break;
      case -10:
      document.getElementById('corsa').innerHTML =  'Siamo praticamente in superificie.';
      break;
      case -20:
      document.getElementById('corsa').innerHTML =  'Vedo la luce in fondo al tunnel.';
      break;
      case -30:
      document.getElementById('corsa').innerHTML =  'Oh, menomale stiamo risalendo.';
      break;
    default:


  }
}

function clickMinus(){
  count = count - 1;
  document.getElementById('contiamo').innerHTML =  count;
  switch (count) {
    case 10:
      document.getElementById('corsa').innerHTML =  'Perchè torni indietro?';


  break;
      case 20:
      document.getElementById('corsa').innerHTML =  'Questa è la giusta altezza.';
      break;
      case 30:
      document.getElementById('corsa').innerHTML =  'Menomale che scendiamo.';
      break;
      case 0:
      document.getElementById('corsa').innerHTML =  'A terra di nuovo.';
      break;
      case -10:
      document.getElementById('corsa').innerHTML =  'Andiamo sempre più giù.';
      break;
      case -20:
      document.getElementById('corsa').innerHTML =  'Stiamo scendendo troppo.';
      break;
      case -30:
      document.getElementById('corsa').innerHTML =  'Ti prego torniamo su!';
      break;
    default:
  }

}
//Counter
