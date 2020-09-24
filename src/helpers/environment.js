let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of the react app
    case 'localhost' || '127.0.0.1':
        //this is the local host name of my API
        APIURL = 'http://localhost:3001';
        break;
    case 'herokuapp.com':
        APIURL = 'notdeployedyet';
        break;
    default:
        APIURL = 'http://localhost:3001';
}

export default APIURL;