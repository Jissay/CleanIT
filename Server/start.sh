# ---------------------------------------------------------
# Script to start a node server and a mongo daemon in a new 
# terminal window, for macOS only.
# ---------------------------------------------------------

# We need the current path as a var to a database located in 
# our local 'Server' directory
path=`pwd`

# Create the database directory if needed
if [ ! -d "$path/database/db" ]
    mkdir "$path/database/db"
fi

# Tells a new terminal window to run a mongo daemon
osascript -e 'tell application "Terminal" to do script "mongod --dbpath '$path'/database/db"'

# Create a new database from raw data and runs the server
node ./database/createDB.js
node ./bin/www