
export default {
    description: `Shared by both the main thread script and the web worker`,
    send: (target, data) => {
        target.postMessage(data);
    }
}
