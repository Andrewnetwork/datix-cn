import express from 'express';
import http from 'http';
import path from 'path';
import config from './config';
import httpProxy from 'http-proxy';
import RED from 'node-red';
import ioCtor from 'socket.io';

/**
 * get home dir
 */
function _getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

/**
 * call various server constructors
 */
const app = express();
const server = http.Server(app);


/**
 * use ejs as template engine
 */
app.set('view engine', 'ejs');
app.set('views', 'www/templates');


/**
 * serve static content
 */
app.use(express.static('www/public'));


/**
 * render index.ejs
 */
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/blank', (req, res) => {
  res.render('blank');
});

app.get('/cvstream', (req, res) => {
  res.render('cvstream');
});

var io = ioCtor(server);
io.on('connection', function(client){
  console.log('connected');
  client.on('facedetected', function(data){
    client.broadcast.emit('facedetected', data);
  });
  client.on('disconnect', function(){
    console.log('disconnected')
  });
});

//if (config.WITH_RED) {
  var settings = {
      httpAdminRoot:'/red',
      httpNodeRoot: '/redapi',
      userDir: path.join(_getUserHome(), '.node-red'),
      functionGlobalContext: { }
  };

  RED.init(server,settings);

  app.use(settings.httpAdminRoot,RED.httpAdmin);

  app.use(settings.httpNodeRoot,RED.httpNode);

  RED.start();
//}

/**
 * start server
 */
server.listen(config.port, () => {
  console.log(_getUserHome());
  console.log('SERVER RUNNING.');
});
