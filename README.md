# React tutorial with port to Knockout

I re-implemented the React comment box example from [the React tutorial](http://facebook.github.io/react/docs/tutorial.html), using Knockout.js, so I could compare what the Knockout version would look like. 


## To use

There are several simple server implementations included. They all serve static files from `public/` and handle requests to `comments.json` to fetch or add data. Start a server with one of the following:

### Node

```sh
npm install
node server.js
```

### Python

```sh
pip install -r requirements.txt
python server.py
```

### Ruby
```sh
ruby server.rb
```

### PHP
```sh
php server.php
```

### Go
```sh
go run server.go
```

The original React version is at <http://localhost:3000/>. 
The Knockout version is at <http://localhost:3000/index-ko.html>. 

