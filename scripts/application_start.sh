#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/express-app

#navigate into our working directory where we have all our github files
cd /home/ec2-user/express-app

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
npm install

#install migrate Mongo Golbally 
npm i migrate-mongo -g

#install mocha Golbally 
npm i mocha -g

#migration call
migrate-mongo up

#test cases checking
npm test

#start our node app in the background
node app.js > app.out.log 2> app.err.log < /dev/null &  
