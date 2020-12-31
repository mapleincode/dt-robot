/*
 * @Author: maple
 * @Date: 2020-12-30 14:24:07
 * @LastEditors: maple
 * @LastEditTime: 2020-12-31 11:31:41
 */
import sign from './sign'
import axios from 'axios'
import querystring from 'querystring'

import TextMessage from './TextMessage'
import ActionCardMessage from './ActionCardMessgae';
import FeedCardMessage from './FeedCardMessage';
import LinkMessage from './LinkMessage';
import MarkdownMessage from './MarkdownMessage';
import Message from './Message'

interface RobotOptions {
  timeout: number;
  host: string;
}

interface SendOptions {

}

export default class Robot {
  private accessToken: string;
  private secret: string;
  private options: RobotOptions|null;
  private host: string;

  constructor(accessToken: string, secret: string, options?: RobotOptions) {
    this.accessToken = accessToken;
    this.secret = secret;
    this.host = options && options.host || 'https://oapi.dingtalk.com/robot/send';
    this.options = options || null;
  }

  public async send(data: object, options?: SendOptions): Promise<void> {
    const { timestamp, sign: _sign } = sign(this.secret);
    const queryData = {
      timestamp: timestamp,
      sign: _sign,
      access_token: this.accessToken
    }

    const result = await axios({
      method: 'post',
      url: this.host + '?' + querystring.stringify(queryData), 
      data: data
    });

    if (result.status !== 200) {
      throw new Error('请求失败');
    }

    const { errcode, errmsg } = result.data;
    if (errcode !== 0) {
      throw new Error(errmsg);
    }

    return;
  }

  createTextMessage() {
    return new TextMessage(this);
  }

  createActionCardMessage() {
    return new ActionCardMessage(this);
  }

  createFeedCardMessage() {
    return new FeedCardMessage(this);
  }

  createLinkMessage() {
    return new LinkMessage(this);
  }

  createMarkdownMessage() {
    return new MarkdownMessage(this);
  }

  createMessage(message: Message) {
    message.setRobot(this);
    return message;
  }
}