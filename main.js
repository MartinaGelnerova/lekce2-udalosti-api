// tady je místo pro náš program


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

function textVetsi() {
  let odstavec = document.querySelector('p');
  let fontVelikost = odstavec.style.fontSize.replace('px', '');
  fontVelikost++;
  odstavec.style.fontSize = fontVelikost + 'px';
}

function playAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Zapínám píseň...');
  audioFile.play();
}

function pauseAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Pauzuju píseň...');
  audioFile.pause();
}

function silenceAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Hlasitost 0%...');
  audioFile.volume = '0.0';
}

function halfVolumeAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Hlasitost 50%...');
  audioFile.volume = '0.5';
}

function fullVolumeAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Hlasitost 100%...');
  audioFile.volume = '1.0';
}

function rewindAudio() {
  let audioFile = document.getElementById('zvukovaStopa');
  console.log('Skáču na začátek...');
  audioFile.currentTime = '0.0';
}