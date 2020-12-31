/*
 * @Author: maple
 * @Date: 2020-12-30 17:37:06
 * @LastEditors: maple
 * @LastEditTime: 2020-12-30 17:47:53
 */
import Message from './Message'
import Robot from './Robot'
import Button from './Button'

export default class TextMessage extends Message {
  private hideAvator: boolean;
  private btnOrientation: boolean;
  private singleURL: string;
  private btns: Button[];



  constructor(robot: Robot) {
    super(robot)
    this.msgtype = 'actionCard';
    this.hideAvator = false;
    this.btnOrientation = true;
    this.singleURL = '';
    this.btns = [];
  }

  setHideAvator(hideavator: boolean) {
    this.hideAvator = hideavator;
    return this;
  }

  setBtnOrientation(btnOrientation: boolean) {
    this.btnOrientation = btnOrientation;
    return this;
  }

  setSingleURL(url: string) {
    this.singleURL = url;
  }

  setBtns(btns: Button[]) {
    this.btns = btns;
  }

  get data () {
    return {
      actionCard: {
        title: this.title,
        text: this.text,
        hideAvatar: this.hideAvator ? '1' : '0',
        btnOrientation: this.btnOrientation ? '1' : '0',
        singleURL: this.singleURL,
        btns: this.btns
      }
    };
  }
}