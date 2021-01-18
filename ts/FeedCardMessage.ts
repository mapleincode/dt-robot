/*
 * @Author: maple
 * @Date: 2020-12-30 18:25:40
 * @LastEditors: maple
 * @LastEditTime: 2020-12-31 15:06:25
 */
import Message from './Message'
import Robot from './Robot'
import Link from './Link'

export default class FeedCardMessage extends Message {
  private links: Link[];

  constructor(robot: Robot) {
    super(robot)
    this.msgtype = 'feedCard';
    this.links = [];
  }

  setLinks(links: Link[]) {
    this.links = links;
  }

  get data () {
    return {
      links: this.links
    };
  }
}