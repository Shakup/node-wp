# node-wp
> WordPress API Wrapper For Node.js

## Installation

```bash
$ npm install --save node-wp
```

## Usage

```javascript
var
   NodeWP = require('node-wp')
   , wp   = new NodeWP('YOUR_API_ENDPOINT');

wp
   .posts({
      page: 1,
      per_page: 5
   })
   .then(function (posts) {
   
      posts.forEach(function (post) {
         console.log( post.slug );
      });
      
   })
   .catch(function (err) {
      console.log('ERROR!');
   });
```

## Methods availables

> All methods parameters can be found on ***(API documentation)[http://v2.wp-api.org/reference/]***

### Posts

```javascript
wp.posts( [parameters] )
```

### Pages

```javascript
wp.pages( [parameters] )
```

### Media

```javascript
wp.media( [parameters] )
```

### Comments

```javascript
wp.comments( [parameters] )
```

### Pages

```javascript
wp.pages( [parameters] )
```

### Taxonomies

```javascript
wp.taxonomies( [parameters] )
```

### Categories

```javascript
wp.categories( [parameters] )
```

### Tags

```javascript
wp.tags( [parameters] )
```

### Users

```javascript
wp.users( [parameters] )
```

## Author

* Email: [sebastien.decamme@gmail.com](mailto:sebastien.decamme@gmail.com)
* Twitter: [@sdecamme](https://twitter.com/sdecamme)
* Website: [http://sebastiendecamme.fr](http://sebastiendecamme.fr)

## Copyright and license

Copyright 2014-2015 Sébastien Decamme. Released under [MIT](http://opensource.org/licenses/MIT).