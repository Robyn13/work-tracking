// import { ActionListDetailsComponent } from './action-list-details.component';
// import { Action } from '../../../core/models/action.model';

// describe('ActionListDetailsComponent', () => {
//   let component: ActionListDetailsComponent;
//   const defaultActions: Action[] = [
//     <Action>{
//       description: 'finish the project',
//       date: new Date(2019, 6, 1),
//       completed: true,
//     },
//     <Action>{
//       description: 'finish the project3',
//       date: new Date(2019, 9, 1),
//       completed: false,
//     },
//     <Action>{
//       description: 'finish the project1',
//       date: new Date(2019, 7, 1),
//       completed: true,
//     },
//     <Action>{
//       description: 'finish the project2',
//       date: new Date(2019, 8, 1),
//       completed: false,
//     },
//     <Action>{
//       description: 'finish the project4',
//       date: new Date(2019, 10, 1),
//       completed: false,
//     },
//     <Action>{
//       description: 'finish the project6',
//       date: new Date(2019, 12, 1),
//       completed: true,
//     },
//     <Action>{
//       description: 'finish the project5',
//       date: new Date(2019, 11, 1),
//       completed: false,
//     },
//   ];

//   beforeEach(function() {
//     component = new ActionListDetailsComponent();
//   });

//   it('setting action list should order by not completed first then completed then by due date', () => {
//     component.actionList = defaultActions;
//     const result = component.actionList;

//     expect(result[0].completed).toBe(false, 'first item is wrong');
//     expect(result[0].date).toEqual(new Date(2019, 8, 1), 'first item is wrong');
//     expect(result[1].completed).toBe(false, 'second item is wrong');
//     expect(result[1].date).toEqual(new Date(2019, 9, 1), 'second item is wrong');
//     expect(result[2].completed).toBe(false, 'third item is wrong');
//     expect(result[2].date).toEqual(new Date(2019, 10, 1), 'third item is wrong');
//     expect(result[3].completed).toBe(false, 'fourth item is wrong');
//     expect(result[3].date).toEqual(new Date(2019, 11, 1), 'fourth item is wrong');
//     expect(result[4].completed).toBe(true, 'fifth item is wrong');
//     expect(result[4].date).toEqual(new Date(2019, 12, 1), 'fifth item is wrong');
//     expect(result[5].completed).toBe(true, 'sixth item is wrong');
//     expect(result[5].date).toEqual(new Date(2019, 7, 1), 'sixth item is wrong');
//     expect(result[6].completed).toBe(true, 'seventh item is wrong');
//     expect(result[6].date).toEqual(new Date(2019, 6, 1), 'seventh item is wrong');
//   });
// });
