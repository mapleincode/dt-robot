/*
 * @Author: maple
 * @Date: 2020-12-30 14:18:40
 * @LastEditors: maple
 * @LastEditTime: 2020-12-30 18:31:15
 */
import crypto from 'crypto'

export default function sign (secret: string): { sign: string, timestamp: number } {
  const timestamp = (new Date()).valueOf();
  const signText = `${timestamp}\n${secret}`;
  const sign = crypto.createHmac('sha256', secret).update(signText).digest('base64');

  return { sign, timestamp };
};
