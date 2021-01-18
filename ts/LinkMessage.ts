/*
 * @Author: maple
 * @Date: 2020-12-30 17:30:32
 * @LastEditors: maple
 * @LastEditTime: 2020-12-31 15:18:39
 */
import Message from './Message'
import Robot from './Robot'

export default class LinkMessage extends Message {
  private picUrl: string;
  private messageUrl: string;

  constructor(robot: Robot) {
    super(robot)

    this.msgtype = 'link';
    this.picUrl = '';
    this.messageUrl = '';
  }

  get data () {
    return {
      text: this.text,
      title: this.title,
      picUrl: this.picUrl,
      messageUrl: this.messageUrl
    };
  }

  setPicUrl(picUrl: string) {
    this.picUrl = picUrl;
    return this;
  }

  setMessageUrl(messageUrl: string) {
    this.messageUrl = messageUrl;
    return this;
  }
}