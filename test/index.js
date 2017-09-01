const NodeWP = require('../lib/node-wp')
const WP = new NodeWP('http://shakup.net/wp-json/wp/v2')

WP.query('/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
