// You create a worker:
const worker = new Worker("worker.js");

// Send messages:
worker.postMessage("hello");

// Receive messages:
worker.onmessage = e => console.log("Got:", e.data);

// Handle errors:
worker.onerror = e =>
    console.error(`Error in ${e.filename}:${e.lineno} - ${e.message}`);

// Kill it:
worker.terminate();

onmessage = e => {
    console.log("Worker got:", e.data);
    postMessage("Got it!");
};

onmessage = e => {
    const smeared = smear(e.data);
    postMessage(smeared);
};

// postMessage("DEBUG: finished loop");

onmessage = e => {
    const urls = e.data;
    const results = [];

    for (const url of urls) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, false); // synchronous
        xhr.send();
        if (xhr.status !== 200) throw Error(`${xhr.status} ${xhr.statusText}`);
        results.push(xhr.responseText);
    }

    postMessage(results);
};
