# Installing for Linux, Mac OSX, or Windows

Precompiled packages will be available when we hit our first beta build. Until then,
everyone will have to install from source.


# Installing From Source

Source code can be obtained by cloning the keymail repository from github with
```git clone https://github.com/NachoBits/keymail```. Because KeyMail is built
on top of Node-Webkit, it will have to be installed as well.

## Installing Node-Webkit

###NPM
The easiest way to get Node-Webkit is to install it via NPM with
```npm install -g nw```.

###From GitHub
The Node-Webkit team provides packages for Linux, OSX, and Linux in their GitHub repo
as well that can be found here https://github.com/nwjs/nw.js/tree/master.

##Running Keymail
Dependencies for KeyMail are not in the GitHub repo, so they will have to be installed with
NPM.

```npm install```

In the directory where KeyMail was downloaded to will install the Node.js dependencies. Front end dependencies are managed with Bower, which should have been installed as a dependency. A ```bower install``` should take care the front end dependencies.

Once everything is installed, the command ```nw .``` in the KeyMail directory or ```nw <keymail directory>``` will run the application.
