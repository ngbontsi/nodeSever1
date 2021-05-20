#!/bin/bash

#navigate into our working directory where we have ${our github files
cd /home/ec2-user/node-server

#add npm and node to path
export NVM_DIR="$HOME/\$AV_ASW/\$VAULT/.nvm"

[ -s "$NVM_DIR/nvm.sh"] && \. "$NVM_DIR/nvm.sh" # loads nvm
[ -s "$NVM_DIR/bash_completion"] && \. "$NVM_DIR/bash_completion" # loads nvm bash_completion

#install node modules
npm install

#start our node app in background
nodemon server > app.out.log 2> app.err.log < /dev/null &