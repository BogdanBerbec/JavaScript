function spanTitle() {
    let title = document.querySelector(".title");
    let text = title.innerHTML.trim();
    let letters = text.split('');
    let spans = letters.map(
        letter =>  { 
            let span = document.createElement("span")
            span.innerText = letter;
            return span;
        }
    );
    title.innerHTML = '';
    spans.forEach(span => {
        title.appendChild(span);
    });
    return spans;
}
let spans = spanTitle();
for(i = 0; i < spans.length; i++) {
    console.log(spans[i])
}
console.log();
let spansCopy = spans;
var sortedSpans = [];
// while(true) {
//     var numarRandom = Math.round(Math.random() * spans.length);
//     if(!sortedSpans.includes(spans[numarRandom]) & !sortedSpans.includes(spans[numarRandom+1]) & !sortedSpans.includes(spans[numarRandom-1])) {
//         sortedSpans.push(spans[numarRandom]);
//     }
//     if(sortedSpans.length == 6) {
//         break;
//     }
// }
while(sortedSpans.length != 7) {
    var numarRandom = Math.round(Math.random() * spans.length);
    if(!sortedSpans.includes(spans[numarRandom]) & !sortedSpans.includes(spans[numarRandom+1]) & !sortedSpans.includes(spans[numarRandom-1])) {
        sortedSpans.push(spans[numarRandom]);
    }
}
// for(j=0; j<sortedSpans.length; j++) {
//     console.log(sortedSpans[j]);
// }
sortedSpans.forEach(span => span.className = "bounce");
// spans.sort( function() { return 0.5 - Math.random() } );
// let spansToAnimate = spans.slice(0, 6);
// spansToAnimate.forEach(span => span.classList.add('bounce'))

// let mySpan = spans[1];
// mySpan.classList.add('bounce');