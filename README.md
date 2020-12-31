simple sdk for dingtalk robot
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