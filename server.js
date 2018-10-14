const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const routes = require('./appRoutes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
})

app.prepare()
.then(() => {
  const server = express()

  // server.get('/about', (req, res) => {
  //   const actualPage = '/about/about'
  //   // const queryParams = { title: req.params.id }
  //   const queryParams = {}; 
  //   app.render(req, res, actualPage, queryParams)
  // })

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/')
  })

  // Route path to serve in server
  server.get('/blog/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    renderAndCache(req, res, '/blog', queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(4202, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:4202')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

function getCacheKey (req) {
  return `${req.url}`
}

async function renderAndCache (req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    // Let's cache this page
    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}