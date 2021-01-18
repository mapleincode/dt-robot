/*
 * @Author: maple
 * @Date: 2020-12-30 14:30:01
 * @LastEditors: maple
 * @LastEditTime: 2021-01-18 12:39:51
 */
import Robot from './Robot'

export default class Message {
  private robot: Robot|null;
  private isAtAll: boolean;
  private atMobiles: string[];
  protected title: string;
  protected msgtype: string | null;
  protected text: string;

  constructor(robot: Robot) {
    this.robot = robot;
    this.isAtAll = false;
    this.atMobiles = [];
    this.msgtype = null;

    this.title = '';
    this.text = '';
  }

  get data(): object {
    return {};
  }

  setRobot(robot: Robot) {
    this.robot = robot;
    return this;
  }

  setAtAll() {
    this.isAtAll = true;
    return this;
  }

  setMobiles(mobiles: string[]) {
    this.atMobiles = mobiles;
    return this;
  }

  appendMobiles(mobiles: string|string[]) {
    const tmps = typeof mobiles === 'string' ? [mobiles]: mobiles

    for (const tmp of tmps) {
      if (this.atMobiles.indexOf(tmp) < 0) {
        this.atMobiles.push(tmp)
      }
    }
  }

  send() {
    const data = this.data;
    const queryData = {
      ...data,
      msgtype: this.msgtype,
      at: {
        isAtAll: this.isAtAll,
        atMobiles: this.atMobiles
      }
    }
    if (!this.robot) {
      throw new Error('robot is not define');
    }
    return this.robot.send(queryData);
  }

  setTitle (title: string) {
    this.title = title;
    return this;
  }

  setText (text: string) {
    this.text = text;
    return this;
  }

  appendText (text: string) {
    this.text = this.text + text;
    return this;
  }
}