import { Employee } from '../core/models/employee.model';
import { Note } from '../core/models/note.model';
import { Action } from '../core/models/action.model';
import { Info } from '../core/models/info.model';

export class DirectReport implements Employee {
  _id: string;
  name: string;
  title: string;
  fullView: boolean = false;
  startDate: Date;
  desiredCoachingCadence: string;
  commuteTime: number;
  currentClient: string;
  currentAddress: string;
  reportsTo: string;
  isInsert: boolean;
  notes: Note[];
  actionItems: Action[];
  extraInfo: Info[];

  constructor() {}

  copyEmployee(employee: Employee) {
    this._id = employee._id;
    this.name = employee.name;
    this.title = employee.title;
    this.startDate = employee.startDate;
    this.reportsTo = employee.reportsTo;
    this.desiredCoachingCadence = employee.desiredCoachingCadence;
    this.commuteTime = employee.commuteTime;
    this.currentClient = employee.currentClient;
    this.currentAddress = employee.currentAddress;
    this.notes = employee.notes;
    this.actionItems = employee.actionItems;
    this.extraInfo = employee.extraInfo;
    return this;
  }

  createNewDirectReport() {
    this.notes = [];
    this.actionItems = [];
    this.extraInfo = [];
    this.isInsert = true;
    this.fullView = true;
    return this;
  }
}
