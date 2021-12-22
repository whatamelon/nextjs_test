 
## Commands

  

#### Development Server.

```bash
npm run dev
```

##### Open [http://localhost:3000](http://localhost:3000) 


#### Production Build

```bash
npm run build
``` 

## Amazon EC2

  

#### Running in EC2 Server

```bash

{ accessamazon }

pm2 start npm -w -i 0 --name 'next' -- start

npm run build

npm run start
or
npm run start -- -p 3005 ( 3005번 포트로 접속 )

```

#### Stop Front Server

```bash

ps -ef | grep next

kill { next code }

ps -ef | grep pm2

kill { pm2 code }

exit

```
