// tady je místo pro náš program

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;

function priNajetiNaCtverec() {
  console.log('Test' + pocitadlo);
  // pocitadlo = pocitadlo + 1;
  pocitadlo++; //inkrementace: zvedne čislo o 1
}

function zmenStyl() {
  let nadpis = document.querySelector('h1');
  nadpis.classList.toggle('zeleny');
}

let odstavec = document.querySelector('p');
odstavec.style.fontSize = '16px';

function tucne() {
  let odstavec = document.querySelector('p');
  odstavec.style.fontWeight = 'bold';
}

function normalni() {
  let odstavec = document.querySelector('p');
  odstavec.style.fontWeight = 'normal';
}


function textCerveny() {
  let odstavec = document.querySelector('p');
  odstavec.classList.toggle('cerveny')
}