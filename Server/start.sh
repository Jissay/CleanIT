# Script to start a node server and a mongo daemon in a new 
# terminal window, for macOS only. 
osascript -e 'tell application "Terminal" to do script "mongod"'
node ./database/createDB.js
node ./bin/www