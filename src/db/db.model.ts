import Dexie, { Table } from 'dexie';
// table inteface
export interface Event {
  id?: string;
  xAxis: number;
  yAxis: number;
  name: string;
  time: string;
  guest: string;
  markerColor: string;
}
export class DB extends Dexie {
  events!: Table<Event>; 
  constructor() {
    super('indexedDB');
    this.version(1).stores({
      events: 'id, xAxis, yAxis, name, time, guest, markerColor'  
    });
  }
}
export const db = new DB();