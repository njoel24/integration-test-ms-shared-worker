import { setupWorker, rest } from "msw";

const handlers = [
    rest.get('./mySharedWorker.js', null)
]

const worker = setupWorker(...handlers)

const options = {
    serviceWorker: {
        url: './mockServiceWorker.js',
        options: {
            scope: '/'
        }
    }
}

worker.start(options).then(() => {
    new SharedWorker('./mySharedWorker.js')
})