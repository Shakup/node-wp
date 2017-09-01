const url     = require('url')
const request = require('request')

class NodeWP {
    /**
     * Creates an instance of NodeWP.
     * @param {string} [endpoint=''] WordPress API endpoint
     * @memberof NodeWP
     */
    constructor (endpoint = '') {
        if (!endpoint || !url.parse(endpoint).hostname) {
            throw new Error('The API endpoint is missing or incorrect')
        }

        this.endpoint = endpoint
    }

    query (path = '', method = 'GET') {
        return new Promise((resolve, reject) => {
            request({
                url: `${this.endpoint}{path}`,
                method,
                followRedirect: true,
                followAllRedirects: true,
                maxRedirects: 3,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
                },
            }, (err, resp) => {
                if (err) {
                    reject(new Error('Unable to perform request'))
                } else if (resp.statusCode !== 200) {
                    let json = JSON.parse(resp.body)
                    reject(new Error(json.message))
                } else {
                    try {
                        let json = JSON.parse(resp.body)
                        resolve(json)
                    } catch (e) {
                        reject(new Error('Unable to perform request'))
                    }
                }
            })
        })
    }
}

module.exports = NodeWP
