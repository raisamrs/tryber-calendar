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
