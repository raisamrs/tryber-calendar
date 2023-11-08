const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

/* Exercício 1 – Crie um calendário dinamicamente
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag ul. */
function addDays() {
  const daysElement = document.querySelector('#days');
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const newLi = document.createElement('li');
    newLi.innerText = decemberDaysList[i];
    newLi.classList.add('day');
    daysElement.appendChild(newLi);
  }
}
function addClassesToDays() {
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let liELement = document.getElementById('days').children[i];
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 31) {
      liELement.classList.add('holiday');
    } else if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18) {
      liELement.classList.add('friday');
    } else if (decemberDaysList[i] === 25) {
      liELement.classList.add('holiday');
      liELement.classList.add('friday');
    }
  }
}
addDays();
addClassesToDays();

/* Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
Importante: Esse botão também deve ter a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)". */

const holidayBtn = document.getElementById('btn-holiday');
const arrHolidays = document.querySelectorAll('.holiday');

// 1. Verificar se a classe 'select-holidays' foi aplicada aos elementos que têm a classe 'holiday';
// 1.1. Se TIVER a classe 'select-holidays': remover a classe 'select-holidays';
// 1.2. Se NÃO TIVER a classe 'select-holidays': adiciona a classe 'select-holidays'.

const handleClickBtn = () => {
  for (let i = 0; i < arrHolidays.length; i += 1) {
    if (arrHolidays[i].classList.contains('select-holidays')) {
      arrHolidays[i].classList.remove('select-holidays');
      arrHolidays[i].classList.add('unselect-holidays');
    } else {
      arrHolidays[i].classList.add('select-holidays');
      arrHolidays[i].classList.remove('unselect-holidays');
    }
  }
};
holidayBtn.addEventListener('click', handleClickBtn);
