# 1. from git
# ssh to the server
ssh {user}@{host ip}

# install git
sudo apt-get install git

# clone the repo
git clone {url}

# cd to project
cd {project dir}

# install nodejs
sudo apt-get install nodejs

# install dependencies
npm install

# start the app
npm start

exit

# 2. from local
rsync -av {local path} {user}@{host ip}:{remote path}