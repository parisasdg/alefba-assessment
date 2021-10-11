import {Injectable} from '@angular/core';
import * as faker from 'faker';
import {Observable} from "rxjs";

export class Message {
  ID: number = 0;
  message: string = '';
  status: MessageStatus = MessageStatus.False;
}

export enum MessageStatus {
  True,
  MaybeTrue,
  False
}

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  currentId = 0;

  generateMessages = new Observable<Message>(observer => {
    setInterval(() => {
      observer.next({
        message: `${faker.name.firstName()} ${faker.name.lastName()} و ${faker.name.firstName()} ${faker.name.lastName()} شبیه به هم هستند`,
        status: this.randomIntFromInterval(0, 2) as MessageStatus,
        ID: this.currentId++
      } as Message)
    }, 1000)
  })

  constructor() {
    faker.setLocale('fa');
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
