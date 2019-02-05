import config from '../config.json'
const dotmailer = util.promisify(require('dotmailer')(config.dotmailer));
import util from 'util';

// This class is just a wrapper around the dotmailer api that returns the callback resolver as a promise.
// You can use the await keyword to access these endpoints and simplify the callback hell.
export default new class DotmailerAPI {
    requestDotmailerEndpoint(endpoint, ...args) {
        return dotmailer(endpoint, ...args)
    }
}