import util from './util';

let workerUrl;

export default {
    start: function () {
        const worker = new Worker(this._workerUrl)
        worker.addEventListener('message', (message) => {
            console.log(message.data);
        });
        util.send(worker, 'start');
    },
    _workerUrl: null // set at runtime when bundle is executed
}
