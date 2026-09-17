
export default [{
    input: ['./worker.js', './main.js'],
    output: {
        dir: 'out',
        format: 'amd',
    },
    experimentalCodeSplitting: true
}, {
    input: './bundle.js',
    output: {
        name: 'myLib',
        file: 'out/final_bundle.js',
        format: 'umd'
    },
    intro: `
// Hijack "define" so we can store the factory functions for the shared and
// worker AMD "chunks" created in the code-splitting build pass.
// Very hacky, deeply coupled with the code in bundle.js
let shared, worker;
let lib; // delcare 'lib' -- which is exported by bundle.js -- so we can set its value here
function define(_, module) {
if (!shared) {
    shared = module;
} else if (!worker) {
    worker = module;
} else {
    // execute the shared chunk
    const sharedChunk = {};
    shared(sharedChunk);
    // execute the main chunk
    lib = module(sharedChunk);

    // create a string of code that's analogous to the above, but for the worker.
    const workerBundleString = 'const sharedChunk = {}; (' + shared + ')(sharedChunk); (' + worker + ')(sharedChunk);'
    // Create a blob URL from this code string, save it on 'lib' to be used
    // when creating web workers
    lib._workerUrl = window.URL.createObjectURL(new Blob([workerBundleString], { type: 'text/javascript' }));
}
}
`
}];

