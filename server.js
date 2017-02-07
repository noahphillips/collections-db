var http            = require('http')
var ecstatic        = require('ecstatic')
// var server  = http.createServer(handler)
 
// function handler (req, res) {
//   router(req, res, function () { static(req, res)})
// }

// server.listen(11001, function () {
//   console.log('server listening on http://localhost:11001')
// })

http.createServer(
  ecstatic({ root: __dirname + '/public' })
).listen(11001);

console.log('server listening on http://localhost:11001')