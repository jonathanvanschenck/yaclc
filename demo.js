const { f, BACKGROUND_COLORS, COLORS } = require("./index.js");

console.log();
console.log(`==============================================================================================`);
console.log(`#                                                                                            #`);
// console.log(`#                      Yaclc: Yet Another Command Line Colorizer                             #`);
console.log(`#                      ${f("Yaclc",{ color:"yellow"})}: Yet Another Command Line Colorizer                             #`);
console.log(`#                                                                                            #`);
console.log(`==============================================================================================`);
console.log();
console.log();


console.log(`You can print ${f("in color!", { color: "green"})}`);
console.log();
console.log(`Or in ${f("boldface", { bold: true})}`);
console.log();
console.log(`Or ${f("both!", { color: "red", bold: true })}`);
console.log();
console.log(`If your terminal supports it, you can do hex colors, like ${f("#ffaa33", { color: "#ffaa33" })}`);
console.log(`or ${f("#4378ae", { color: "#4378ae" })}`);
console.log();
console.log(`You can also make text ${f("blink", { blink: true })}, ${f("be faint", { faint: true })}, or ${f("underlined", { underlined: true })}`);
console.log();
console.log(`${f("Background colors are also a thing....", { bg_color: "yellow" })}`);
console.log(`And they also support hex colors: ${f("#00aa14", { bg_color: "#00aa14" })}`);

console.log();
console.log();
console.log("Here are all the built-in colors:");

console.log((["          "].concat(Object.keys(COLORS).map(v => {
    let head = v;
    while ( head.length < 7 ) head = " "+head;
    return head;
}))).join(" | "));
console.log("-".repeat(10*Object.keys(COLORS).length + 10));
for ( const key of Object.keys(BACKGROUND_COLORS) ) {
    let head = key;
    while ( head.length < 10 ) head = " "+head;
    console.log([head, ...(Object.keys(COLORS).map(color => f("xxxxxxx", { color, bg_color: key })))].join(" | "));
}
console.log();
console.log();
