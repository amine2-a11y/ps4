import util from './util';

self.onmessage = () => {
    util.send(self, 'started');
}
