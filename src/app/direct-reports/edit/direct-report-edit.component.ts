import { Input, Component } from '@angular/core';
import { DirectReport } from '../direct-reports.model';
import { Action, ActionType, actionConfigs } from '../../core/models/action.model';
import { Note, NoteType, noteConfigs } from '../../core/models/note.model';
import { Info, InfoType, infoConfigs } from '../../core/models/info.model';

@Component({
  selector: 'direct-report-edit',
  templateUrl: './direct-report-edit.component.html',
})
export class DirectReportEditComponent {
  @Input() directReport: DirectReport;

  actionConfigs = actionConfigs;
  noteConfigs = noteConfigs;
  infoConfigs = infoConfigs;

  constructor() {}

  getFormattedDate(date: Date) {
    if (!date) {
      return null;
    }
    return date.toISOString().substring(0, 10);
  }

  getUpdatedDate(dateFromPicker: any) {
    if (!dateFromPicker || !dateFromPicker.currentTarget || !dateFromPicker.currentTarget.value) {
      return null;
    }
    const dateInLocal = new Date(dateFromPicker.currentTarget.value);
    const dateWithoutTime = new Date(dateInLocal.valueOf() + dateInLocal.getTimezoneOffset() * 60 * 1000);
    return dateWithoutTime;
  }

  info = [
    <Info>{
      summaryItem: true,
      description: 'shirt size',
      type: InfoType.Extra,
      info: 'small',
    },
    <Info>{
      summaryItem: false,
      description: 'comment',
      type: InfoType.Extra,
      info: 'didn not like vegas',
    },
    <Info>{
      summaryItem: true,
      description: 'random thought',
      type: InfoType.Extra,
      info: 'wants to be an astronaught',
    },
    <Info>{
      summaryItem: true,
      description: 'Wife',
      type: InfoType.Family,
      info: 'Wendy',
    },
    <Info>{
      summaryItem: false,
      description: 'aunt',
      type: InfoType.Family,
      info: 'hilda',
    },
  ];

  notes = [
    <Note>{
      type: NoteType.OneOnOne,
      date: new Date(2019, 6, 1),
      createdOn: new Date(2019, 7, 1),
      note: `•	I brought up the feedback and read over it at a summary level
o	Daniel started mentally checking off the "covered that" items while I was reading the list
o	Overall, he took the feedback really well.
o	We talked through his "why" for the program.Why is this important and worth everyone's time?
o	We tied that why statement back to the things we are/ aren't including in the program and the feedback received.
      •	We talked about the dangers of having a program like this that is publicly announced that not everyone goes through
o	Daniel argued that the intent wasn't to scale yet and that this was intended
o	I brought up the difference making the program public made
o	He got really stuck on the time it would take him to scale the program with the quality he wanted
    	I challenged him on the quality and ask questions to find the thresholds
    	Even after acknowledging that a new person who has a connector that does it wrong is still better than no connector, he still circled back to the "but it's not the plan" argument
    	He brought up the fact that he's supposed to be less engaged right now and we talked through some ways to save time
    	We ended up circling back to this point several times until I flat out told him that the risk was too high to not scale the program quickly
    •	Daniel ended up bringing Devlin into the conversation and asked how many new hires we expect and got a complete list of people who can become connectors
    o	He went into problem solving mode at this point and I intentionally took a back seat.
    o	Devlin recommended that he find people who can help him teach connectors and jumped on it
    o	I pushed him to think more about the feedback he just received before acting to give himself some time to process
    •	These changes are definitely pushing the bounds of his comfort zone but I think in a good way.
    •	I urged him to identify what is his real MVP for a connector`,
    },
    <Note>{
      type: NoteType.QuickReview,
      date: new Date(2019, 8, 1),
      createdOn: new Date(2019, 9, 1),
      note: `•	I brought up the feedback and read over it at a summary level
o	Daniel started mentally checking off the "covered that" items while I was reading the list
o	Overall, he took the feedback really well.
o	We talked through his "why" for the program.Why is this important and worth everyone's time?
o	We tied that why statement back to the things we are/ aren't including in the program and the feedback received.
      •	We talked about the dangers of having a program like this that is publicly announced that not everyone goes through
o	Daniel argued that the intent wasn't to scale yet and that this was intended
o	I brought up the difference making the program public made
o	He got really stuck on the time it would take him to scale the program with the quality he wanted
    	I challenged him on the quality and ask questions to find the thresholds
    	Even after acknowledging that a new person who has a connector that does it wrong is still better than no connector, he still circled back to the "but it's not the plan" argument
    	He brought up the fact that he's supposed to be less engaged right now and we talked through some ways to save time
    	We ended up circling back to this point several times until I flat out told him that the risk was too high to not scale the program quickly
    •	Daniel ended up bringing Devlin into the conversation and asked how many new hires we expect and got a complete list of people who can become connectors
    o	He went into problem solving mode at this point and I intentionally took a back seat.
    o	Devlin recommended that he find people who can help him teach connectors and jumped on it
    o	I pushed him to think more about the feedback he just received before acting to give himself some time to process
    •	These changes are definitely pushing the bounds of his comfort zone but I think in a good way.
    •	I urged him to identify what is his real MVP for a connector`,
    },
    <Note>{
      type: NoteType.OneOnOne,
      date: new Date(2019, 7, 1),
      createdOn: new Date(2019, 8, 1),
      note: `•	I brought up the feedback and read over it at a summary level
o	Daniel started mentally checking off the "covered that" items while I was reading the list
o	Overall, he took the feedback really well.
o	We talked through his "why" for the program.Why is this important and worth everyone's time?
o	We tied that why statement back to the things we are/ aren't including in the program and the feedback received.
      •	We talked about the dangers of having a program like this that is publicly announced that not everyone goes through
o	Daniel argued that the intent wasn't to scale yet and that this was intended
o	I brought up the difference making the program public made
o	He got really stuck on the time it would take him to scale the program with the quality he wanted
    	I challenged him on the quality and ask questions to find the thresholds
    	Even after acknowledging that a new person who has a connector that does it wrong is still better than no connector, he still circled back to the "but it's not the plan" argument
    	He brought up the fact that he's supposed to be less engaged right now and we talked through some ways to save time
    	We ended up circling back to this point several times until I flat out told him that the risk was too high to not scale the program quickly
    •	Daniel ended up bringing Devlin into the conversation and asked how many new hires we expect and got a complete list of people who can become connectors
    o	He went into problem solving mode at this point and I intentionally took a back seat.
    o	Devlin recommended that he find people who can help him teach connectors and jumped on it
    o	I pushed him to think more about the feedback he just received before acting to give himself some time to process
    •	These changes are definitely pushing the bounds of his comfort zone but I think in a good way.
    •	I urged him to identify what is his real MVP for a connector`,
    },
  ];

  goals = [
    <Action>{
      type: ActionType.Goal,
      description: 'finish the project',
      date: new Date(2019, 6, 1),
      completed: true,
      createdOn: new Date(2018, 1, 1),
      abandoned: false,
      completedOn: new Date(2018, 7, 1),
    },
    <Action>{
      type: ActionType.Commitment,
      description: 'finish the project1',
      date: new Date(2019, 7, 1),
      completed: true,
      createdOn: new Date(2018, 1, 1),
      abandoned: false,
      completedOn: new Date(2018, 8, 1),
    },
    <Action>{
      type: ActionType.Commitment,
      description: 'finish the project2',
      date: new Date(2019, 8, 1),
      completed: false,
      createdOn: new Date(2018, 1, 1),
      abandoned: true,
    },
    <Action>{
      type: ActionType.Commitment,
      description: 'finish the project3',
      date: new Date(2019, 8, 10),
      completed: false,
      createdOn: new Date(2018, 1, 1),
      abandoned: false,
    },
    <Action>{
      type: ActionType.Commitment,
      description: 'finish the project4',
      date: new Date(2019, 10, 1),
      completed: false,
      createdOn: new Date(2018, 1, 1),
      abandoned: true,
    },
    <Action>{
      type: ActionType.Goal,
      description: 'finish the project5',
      date: new Date(2019, 11, 1),
      completed: false,
      createdOn: new Date(2018, 1, 1),
      abandoned: false,
    },
    <Action>{
      type: ActionType.Goal,
      description: 'finish the project6',
      date: new Date(2019, 12, 1),
      completed: false,
      createdOn: new Date(2018, 1, 1),
      abandoned: false,
    },
  ];
}
