🗓️ Tryber Calendar 🗓️
===============	

## O que é?
O **Tryber Calendar** é um calendário destinado aos alunos da Trybe, onde eles podem ver os feriados do mês, as sextas-feiras, marcar dias destinados a projetos, dias destinados a exercícios e ainda adicionar outros tipos de tarefas! Bem funcional pra quem tem uma rotina cheia, né?

## Como funciona:
* Para ver os feriados e/ou as sextas-feiras do mês basta clicar nos botões *Feriados* e *Sexta-feira*, que eles serão destacados. 😉
  
![Observe o gif:](https://github.com/raisamrs/tryber-calendar/blob/main/src/images/tryber%20calendar-holidays%20and%20fridays.gif)

* Clicando num *Tipo da tarefa* de sua escolha, você pode aplicá-la nas datas que preferir.


> [!IMPORTANT]
> Basta ficar de olho no *Tipo adicionado* e verificar se a bolinha mudou para a cor correspondente ao tipo de tarefa de sua escolha!

![Observe o gif:](https://github.com/raisamrs/tryber-calendar/blob/main/src/images/tryber%20calendar-applying%20type%20of%20task%20to%20a%20date.gif)

* É possível criar uma lista de tarefas também! Cada tarefa pode ter, no máximo, 40 caracteres.  Depois de escrever uma nova tarefa, adicione-a (➕). Concluiu a tarefa? Basta clicar no (✔️) quando ela estiver concluída! Você também tem a opção de deletá-la (🗑️)

![Observe o gif:](https://github.com/raisamrs/tryber-calendar/blob/main/src/images/tryber%20calendar-using%20task%20list.gif)


## Rodando localmente
Você pode usar o [Visual Studio Code (vulgo VS Code)](https://code.visualstudio.com/download) e instalar a dependência [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

1. Clone o projeto.  Você pode fazer isso via **`HTTP`** ou via **`SSH`**.

### Via HTTP:
```bash
  git clone https://github.com/raisamrs/tryber-calendar.git
```
### Via SSH:
```bash
  git clone git@github.com:raisamrs/tryber-calendar.git
```

2. Entre no diretório do projeto

```bash
  cd tryber-calendar
```

3. Abra o arquivo `src/index.html`


4. Inicie o servidor clicando em *Go Live*, no canto inferior direito do VSCode.
![Go Live](https://github.com/raisamrs/pixels-art/blob/main/src/imgs/Live%20Server.png)

## Versão Deploy:
Acesse a aplicação em https://raisamrs.github.io/tryber-calendar/

## Autores:
- [@trybe](https://github.com/tryber)

- [@raisamrs](https://www.github.com/raisamrs)


## ⚠️ Observação:
> [!NOTE]
> A versão atual difere em algumas mudanças implementadas única e exclusivamente por mim em relação à proposta original do projeto. Abaixo, seguem elas:
* inclusão dos tipos de tarefa: "trabalho", "lazer" e "outros";
* inclusão do "tipo selecionado";
* inclusão da atribuição dos tipos de tarefas às de "Minha listas de tarefas", bem como os botões "deletar" e "concluir";
* inclusão do alerta: "Por favor, selecione uma tarefa antes de atribuir uma cor ao dia." para quando o usuário ainda não selecionou tipo de tarefa e clicou em algum dia do mês;
* inclusão do alerta: "Por favor, selecione um tipo de tarefa!" para quando o usuário tenta adicionar uma tarefa à lista de tarefas sem ter selecionado algum tipo de tarefa;
* Inclusão do alerta: "Por favor, insira uma tarefa!" para quando o usuário tenta inserir uma tarefa vazia;
* limitação de 40 caracteres no input das tarefas.
