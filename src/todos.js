import { ePrios } from './utils/ePrios';
import { makeIds } from './utils/uniqueId';

const todosWithNoId = [
  { todoTitle: 'Acheter du café', description: '', prio: ePrios.high, complete: false },
  { todoTitle: 'Achat thé', description: '', prio: ePrios.high, complete: true },
  { todoTitle: 'Réaliser l\'exercice', description: 'Créer l\'application "Todo List"', prio: ePrios.normal, complete: false },
  { todoTitle: 'Une tâche terminée', description: 'This HTML file is a template.If you open it directly in the browser, you will see an empty page. You can add webfonts, meta tags, or analytics to this file. The build step will place the bundled scripts into the <body> tag. To begin the development, run `npm start` or `yarn start`. To create a production bundle, use `npm run build` or `yarn build', prio: ePrios.high, complete: true },
];

const uniqueIds = makeIds(todosWithNoId.length);

export const TODOS = todosWithNoId.map((td, index) => ({
  ...td,
  id: uniqueIds[index],
}));