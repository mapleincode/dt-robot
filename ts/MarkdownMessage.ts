/*
 * @Author: maple
 * @Date: 2020-12-30 17:24:24
 * @LastEditors: maple
 * @LastEditTime: 2021-01-18 12:11:10
 */

import Message from './Message'
import Robot from './Robot'

export default class MarkdownMessage extends Message {
  private markdown: string;

  constructor(robot: Robot) {
    super(robot)

    this.msgtype = 'markdown';
    this.markdown = '';
  }
  
  get data () {
    return {
      markdown: {
        text: this.markdown,
        title: this.title
      }
    };
  }

  setMarkdown (markdown: string): MarkdownMessage {
    this.markdown = markdown;
    return this;
  }

  appendMarkdown (markdown: string): MarkdownMessage {
    this.markdown = this.markdown + markdown;
    return this;
  }
}