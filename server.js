import express from 'express';
import http from 'http';
import path from 'path';
import config from './config';
import httpProxy from 'http-proxy';
import RED from 'node-red';
import ioCtor from 'socket.io';
import * as routeDashboard from './src/server/routes/pages/dashboard';
import * as routeCalendar from './src/server/routes/pages/calendar';
import * as routeMessages from './src/server/routes/pages/messages';
import * as routeReports from './src/server/routes/pages/reports';
import * as routeResources from './src/server/routes/pages/resources';
import * as routeIP from './src/server/routes/pages/ip';
import * as routeCompute from './src/server/routes/pages/compute';
import * as routeDataObjects from './src/server/routes/pages/data_objects';
import * as routeDataJobs from './src/server/routes/pages/data_jobs';
import * as routeStatModels from './src/server/routes/pages/stat_models';
import * as routeDocumentation from './src/server/routes/pages/documentation';

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
  res.render('index', {node: 'dashboard', leaf: 'overview'});
});

/**
 * dashboard menu item
 */
app.use('/dashboard', routeDashboard.router);

/**
 * calendar menu item
 */
app.use('/calendar', routeCalendar.router);

/**
 * messages menu item
 */
app.use('/messages', routeMessages.router);

/**
 * reports menu item
 */
app.use('/reports', routeReports.router);

/**
 * resources menu item
 */
app.use('/resources', routeResources.router);

/**
 * compute menu item
 */
app.use('/compute', routeCompute.router);

/**
 * ip menu item
 */
app.use('/ip', routeIP.router);

/**
 * data object menu item
 */
app.use('/dataobjects', routeDataObjects.router);

/**
 * data job menu item
 */
app.use('/datajobs', routeDataJobs.router);

/**
 * stat model menu item
 */
app.use('/statmodels', routeStatModels.router);

/**
 * documentation menu item
 */
app.use('/documentation', routeDocumentation.router);


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


/**
 * initialize node red
 */
 /*
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
*/

/**
 * start server
 */
server.listen(config.port, () => {
  console.log(_getUserHome());
  console.log('SERVER RUNNING.');
});
