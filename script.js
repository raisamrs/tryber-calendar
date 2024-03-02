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

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

/* Exercício 1 – Crie um calendário dinamicamente
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag ul. */

function createDayElement(day) {
  const newLi = document.createElement('li');
  newLi.innerText = day;
  newLi.classList.add('day');
  return newLi;
}

function addDays() {
  const daysElement = document.querySelector('#days');
  for (const day of decemberDaysList) {
    const newLi = createDayElement(day);
    daysElement.appendChild(newLi);
  }
}

function markAsHoliday(element) {
  element.classList.add('holiday');
}

function markAsFriday(element) {
  element.classList.add('friday');
}

function markAsHolidayAndFriday(element) {
  markAsHoliday(element);
  markAsFriday(element);
}

function markClassesForDay(element, day) {
  const specialDays = {
    24: markAsHoliday,
    25: markAsHolidayAndFriday,
    31: markAsHoliday,
    4: markAsFriday,
    11: markAsFriday,
    18: markAsFriday,
  };

  const markFunction = specialDays[day];
  if (markFunction) {
    markFunction(element);
  }
}

function addClassesToDays() {
  const daysElement = document.querySelector('#days');
  const dayElements = daysElement.children;

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const currentDay = decemberDaysList[i];
    const liElement = dayElements[i];
    markClassesForDay(liElement, currentDay);
  }
}

function initializeCalendar() {
  addDays();
  addClassesToDays();
}

initializeCalendar();

/* Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
Importante: Esse botão também deve ter a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)". */

const holidayBtn = document.getElementById('btn-holiday');
const arrHolidays = document.querySelectorAll('.holiday');
const selectHolidays = 'select-holidays';

const handleClickBtnHoliday = () => {
  for (let i = 0; i < arrHolidays.length; i += 1) {
    if (arrHolidays[i].classList.contains(selectHolidays)) {
      arrHolidays[i].classList.remove(selectHolidays);
      arrHolidays[i].classList.add('unselect-holidays');
    } else {
      arrHolidays[i].classList.add(selectHolidays);
      arrHolidays[i].classList.remove('unselect-holidays');
    }
  }
};
holidayBtn.addEventListener('click', handleClickBtnHoliday);

/* Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras
Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias em que são sextas-feiras.

Importante: Esse botão também deve ter a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial e exibe os dias. */

const fridayBtn = document.getElementById('btn-friday');
const arrFridays = document.querySelectorAll('.friday');
const arrFridaysNumbers = [4, 11, 18, 25];

const handleClickBtnFriday = () => {
  for (let i = 0; i < arrFridays.length; i += 1) {
    if (arrFridays[i].outerText !== 'SEXTOU!') {
      arrFridays[i].innerText = 'SEXTOU!';
    } else {
      arrFridays[i].innerText = arrFridaysNumbers[i];
    }
  }
};
fridayBtn.addEventListener('click', handleClickBtnFriday);

/* Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar para 30px e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
De olho na dica 👀: Você pode utilizar a propriedade event.target. De olho na dica 👀: O tamanho original do texto é 20px. */

const arrDay = document.querySelectorAll('.day');

const handleMouseoverDay = ({ target }) => {
  const dayStyle = window.getComputedStyle(target);
  const fontSizeDay = dayStyle.getPropertyValue('font-size');
  if (fontSizeDay === '20px') {
    target.style.fontSize = '30px';
  }
};

const handleMouseoutDay = ({ target }) => {
  const dayStyle = window.getComputedStyle(target);
  const fontSizeDay = dayStyle.getPropertyValue('font-size');
  if (fontSizeDay === '30px') {
    target.style.fontSize = '20px';
  }
};

for (let i = 0; i < arrDay.length; i += 1) {
  arrDay[i].addEventListener('mouseout', handleMouseoutDay);
  arrDay[i].addEventListener('mouseover', handleMouseoverDay);
}

/* Exercício 5 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário */

const taskColors = document.querySelectorAll('.task');

// Adiciona evento de clique para selecionar a cor da tarefa
taskColors.forEach((taskColor) => {
  taskColor.addEventListener('click', () => {
    // Remove a classe 'selected' de todas as cores de tarefa
    taskColors.forEach((color) => color.classList.remove('selected'));
    // Adiciona a classe 'selected' à cor da tarefa clicada
    taskColor.classList.add('selected');
  });
});

// Adiciona evento de clique para atribuir cor ao texto do dia do mês
const daysOfMonth = document.querySelectorAll('.day');

daysOfMonth.forEach((day) => {
  day.addEventListener('click', () => {
    const selectedColor = document.querySelector('.selected');
    const selectedColorStyle = window.getComputedStyle(selectedColor);
    const textColor = selectedColorStyle.getPropertyValue('background-color');
    if (day.style.color !== textColor) {
      day.style.color = textColor;
    } else {
      day.style.color = 'rgb(119,119,119)';
    }
  });
});

// Função para adicionar uma nova tarefa à lista
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  // Verifica se o campo de entrada não está vazio
  if (taskText !== '') {
    const taskList = document.getElementById('task-list');
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskText;
    taskList.appendChild(newTaskItem);
    taskInput.value = ''; // Limpa o campo de entrada após adicionar a tarefa
  } else {
    alert('Por favor, insira um texto para a tarefa!');
  }
}
// Adiciona evento de clique ao botão 'Adicionar'
const addButton = document.getElementById('btn-add');
addButton.addEventListener('click', addTask);

// Adiciona evento de tecla pressionada ao campo de entrada 'task-input'
const taskInput = document.getElementById('task-input');

function handleKeyPress(event) {
  // Verifica se a tecla pressionada é 'Enter' (código 13)
  if (event.key === 'Enter') {
    addTask();
  }
}
taskInput.addEventListener('keypress', handleKeyPress);
