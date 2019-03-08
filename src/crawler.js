const Crawler = require('simplecrawler')

function find () {
  const crawler = Crawler('http://www.example.com/')
    .on('fetchcomplete', () => {
      console.log('Fetched a resource!')
    })

  crawler.start()
}

// const crawlerInstance = new Crawler({
//   maxConnections: 1,
//   callback (error, res, done) {
//     if (error) {
//       console.log(error)
//     }

//     done()
//   },
// })

// function find (url) {
//   return crawlerInstance.queue([{
//     uri: url,
//     jQuery: false,
//     callback (error, res) {
//       if (error) {
//         console.log(error)
//       }

//       return res.body
//     },
//   }])
// }

export default find
