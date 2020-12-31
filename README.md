<!--
 * @Author: maple
 * @Date: 2020-12-31 10:21:51
 * @LastEditors: maple
 * @LastEditTime: 2020-12-31 10:23:06
-->
## Usage

```typescript
import Robot from './index';
const token = 'token';
const secret = 'secret';

const robot = new Robot(token, secret);
const textMessage = robot.createTextMessage();

textMessage.setText('hello');
textMessage.appendMobiles('1888888888');
textMessage.send();
```