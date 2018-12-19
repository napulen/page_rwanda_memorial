# Page Rwanda Memorial

This site contains the implementation for the database of the memorial of the Page Rwanda page. The basic stack for the project includes: MongoDB, Node.js, and Express.js.

## Installation

### Node

#### Install npm

Clone this repo in server and go to the repository home

Install and run npm

```
apt install npm
nmp install
npm start
```

If ```node: not found``` error, [follow these instructions](https://github.com/animetosho/Nyuu/issues/14)

```
ln -s /usr/bin/nodejs /usr/bin/node```

and run it again.

#### Adjust the firewall (if needed)

Don't forget to open SSH

```
sudo ufw allow OpenSSH
sudo ufw enable```


A demo Node project will run on port ```3000```, and so you may need to open it in ```ufw```

```
sudo ufw allow 3000
```

### MongoDB

#### Installation

Following [these instructions](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04)


```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.1 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.1.list

sudo apt-get update
```

If the package keys are missing, [add them](https://chrisjean.com/fix-apt-get-update-the-following-signatures-couldnt-be-verified-because-the-public-key-is-not-available/)

```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 012345thekeynumber6789

sudo apt-get update
```

Finally, install MongoDB

```
sudo apt-get install -y mongodb-org
```

#### Adjust the firewall

MongoDB's default port is ```27017```. It should be accessible only from certain trusted locations. In case you don't want to make it accessible from everywhere:

```
sudo ufw allow from 127.0.0.1/32 to any port 27017
```


#### Run mongo and mongod

Within the repository home, or any other known location, create ```/data``` folder

Run mongod and locate your data folder

```
mongod --dbpath [wherever you put your data folder]```




TODO: Use systemctl or supervisor to start mongod and npm


### Add some data

See ```notes.md```
