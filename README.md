#Installation

in the project directory, with the nodeJS prompt :

    $ npm install

while npm installs the dependencies, you'll have to edit two files (./ being the project's directory) :

    $ ./cConf.js
    $ ./public/js/angular/Yschiff.js

in the first file you'll have to replace consumer_key, consumer_secret, access_token and access_token_secret by those given in your twitter application (https://dev.twitter.com/apps). Don't forget to not leave any field empty in your application settings, especially "Website" and "Callback URL" in our case. And don't forget to generate your access token if it is missing. 
Setting keywords's content is primordal. Take your time to understand the twitter API : https://dev.twitter.com/streaming/reference/post/statuses/filter and be aware that we are using twit's api in our code (https://github.com/ttezel/twit). 

the second file will split the results in two stacks: one is the stream as it's given by the server, the other one will filter the stream with regular expressions. You can also change the number of tweets that are displayed. 

You are done ?

    $ node app.js
    $ go to localhost:7777 !
