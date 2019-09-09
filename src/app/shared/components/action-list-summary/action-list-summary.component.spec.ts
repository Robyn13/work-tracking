// import { ActionListSummaryComponent } from './action-list-summary.component';
// import { Action } from '../../../core/models/action.model';

// describe('ActionListSummaryComponent', () => {
//   let component: ActionListSummaryComponent;
//   const defaultActions: Action[] = [
//     <Action>{
//       description: 'finish the project',
//       date: new Date(2019, 6, 1),
//       completed: true,
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
//       description: 'finish the project3',
//       date: new Date(2019, 9, 1),
//       completed: false,
//     },
//     <Action>{
//       description: 'finish the project4',
//       date: new Date(2019, 10, 1),
//       completed: false,
//     },
//     <Action>{
//       description: 'finish the project5',
//       date: new Date(2019, 11, 1),
//       completed: false,
//     },
//     <Action>{
//       description: 'finish the project6',
//       date: new Date(2019, 12, 1),
//       completed: false,
//     },
//   ];

//   beforeEach(function() {
//     component = new ActionListSummaryComponent();
//   });

//   it('setting action list sets next action date to earliest non completed action', () => {
//     component.actionList = defaultActions;

//     expect(component.nextActionDate).toEqual(new Date(2019, 8, 1));
//   });

//   it('setting action list sets last action date to latest completed action', () => {
//     component.actionList = defaultActions;

//     expect(component.lastActionDate).toEqual(new Date(2019, 7, 1));
//   });

//   it('setting action list sets total actions to count of list', () => {
//     component.actionList = defaultActions;

//     expect(component.totalCompletedActions).toBe(2);
//     expect(component.totalUpComingActions).toBe(5);
//   });

//   it('setting action list of null sets action dates to null and total count to zero', () => {
//     component.actionList = null;

//     expect(component.nextActionDate).toBeNull();
//     expect(component.lastActionDate).toBeNull();
//     expect(component.totalUpComingActions).toBe(0);
//     expect(component.totalCompletedActions).toBe(0);
//   });

//   it('setting action list of empty list sets action dates to null and total count to zero', () => {
//     component.actionList = [];

//     expect(component.nextActionDate).toBeNull();
//     expect(component.lastActionDate).toBeNull();
//     expect(component.totalUpComingActions).toBe(0);
//     expect(component.totalCompletedActions).toBe(0);
//   });
// });
