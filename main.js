var guestList = ['alisha', 'nisha', 'nazia'];
var notComing = guestList.splice(0, 1)[0];
console.log("".concat(notComing, " dont make it to te dinner "));
// push
guestList.push("alaya");
// print message
guestList.forEach(function (guest) { console.log("dear ".concat(guest, " you're invited to the dinner")); });
