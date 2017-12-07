import { createServer, plugins } from 'restify';

import { deleteSingle } from './delete';
import { getSingle } from './get';
import { post } from './post';

var server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.get('/api/contacts', getSingle);
server.post('/api/contacts', post);
server.del('/api/contacts/:id', deleteSingle);

server.listen(8080, () => console.log('API is listening'));