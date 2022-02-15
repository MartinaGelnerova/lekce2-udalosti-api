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
  nadpis.classList.toggle('zeleny');
}