import {Component, OnInit} from '@angular/core';

import {Message, MessageStatus, NamesService} from "../../names.service";
import {Subscription} from "rxjs/internal/Subscription";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  start: boolean = true;

  messages: Array<Message> = [];
  messagesSubscription: Subscription | undefined = undefined;

  constructor(private namesService: NamesService,
              private toastr: ToastrService) {
  }

  get falseMessages(): Array<Message> {
    return this.messages.filter(msg => msg.status === MessageStatus.False);
  }

  get maybeTrueMessages(): Array<Message> {
    return this.messages.filter(msg => msg.status === MessageStatus.MaybeTrue);
  }

  get trueMessages(): Array<Message> {
    return this.messages.filter(msg => msg.status === MessageStatus.True);
  }

  ngOnInit(): void {
    this.generateMessages();
  }


  generateMessages(): void {
    this.messagesSubscription = this.namesService.generateMessages.subscribe(msg => {
      this.messages.push(msg);
      if (msg.status === MessageStatus.False) {
        this.toastr.error(msg.message);
      }
    });
  }

  deleteMessage(id: number) {
    this.messages = this.messages.filter(rm => rm.ID !== id)
  }

  stopGenerateData() {
    this.messagesSubscription?.unsubscribe()
    this.start = false;

  }

  generateData() {
    this.generateMessages();
    this.start = true;
  }

  removeMessages() {
    this.messages = [];
  }

}
