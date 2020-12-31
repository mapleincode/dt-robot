/*
 * @Author: maple
 * @Date: 2020-12-30 16:54:31
 * @LastEditors: maple
 * @LastEditTime: 2020-12-30 18:46:49
 */
import Message from './Message'
import Robot from './Robot'

export default class TextMessage extends Message {
  constructor(robot: Robot) {
    super(robot)
    this.msgtype = 'text';
  }

  get data () {
    return {
      text: {
        content: this.text
      }
    };
  }
}
