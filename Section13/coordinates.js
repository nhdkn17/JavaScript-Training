function getScrollOffsets(w = window) {
    if (w.pageXOffset != null)
        return {x: w.pageXOffset, y: w.pageYOffset};

    let d = w.document;
    if (document.compatMode == "CSS1Compat")
        return {x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop};

    return {x: d.body.scrollLeft, y: d.body.scrollTop};
}

function getViewportSize(w = window) {
    if (w.innerWidth != null)
        return {w: w.innerWidth, h: w.innerHeight};

    let d = w.document;
    if (document.compatMode == "CSS1Compat")
        return {w: d.documentElement.clientWidth, h: d.documentElement.clientHeight};

    return {w: d.body.clientWidth, h: d.body.clientHeight};
}

let box = element.getBoundingClientRect();
let offsets = getScrollOffsets();
let x = box.left + offsets.x;
let y = box.top + offsets.y;

let w = box.width || (box.right - box.left);
let h = box.height || (box.bottom - box.top);

element.getClientRects();  // Trả về tất cả các đoạn hình chữ nhật

let el = document.elementFromPoint(x, y); // x, y theo viewport

window.scrollTo(x, y);
window.scrollBy(dx, dy); // Cuộn tương đối

window.scrollTo(0, document.documentElement.offsetHeight - window.innerHeight);

element.scrollIntoView();          // Cuộn sao cho phần tử nằm trên viewport
element.scrollIntoView(false);     // Nằm ở cuối viewport
