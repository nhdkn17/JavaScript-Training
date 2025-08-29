let db;
let request = indexedDB.open("ContactsDB", 1);

request.onupgradeneeded = function(e) {
    db = e.target.result;
    let store = db.createObjectStore("contacts", { keyPath: "id", autoIncrement: true });
    store.createIndex("name", "name", { unique: false });
};

request.onsuccess = function(e) {
    db = e.target.result;
    console.log("DB opened");
};

request.onerror = function(e) {
    console.error("DB error:", e.target.error);
};

function addContact() {
    let tx = db.transaction("contacts", "readwrite");
    let store = tx.objectStore("contacts");
    store.add({ name: "Alice", phone: "123-456" });
    store.add({ name: "Bob", phone: "789-012" });
    tx.oncomplete = () => alert("Contacts added!");
}

function showContacts() {
    let tx = db.transaction("contacts", "readonly");
    let store = tx.objectStore("contacts");
    let request = store.openCursor();
    let out = document.getElementById("output");
    out.innerHTML = "<b>All contacts:</b><br>";

    request.onsuccess = function(e) {
        let cursor = e.target.result;
        if (cursor) {
            out.innerHTML += cursor.value.name + " - " + cursor.value.phone + "<br>";
            cursor.continue();
        }
    };
}
