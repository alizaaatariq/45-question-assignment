let guestList: string[]=['alisha','nisha','nazia'];
let notComing: string = guestList.splice(0,1)[0];
console.log(`${notComing} dont make it to te dinner `);
// push
guestList.push("alaya");
// print message
guestList.forEach(guest => {console.log(`dear ${guest} you're invited to the dinner`)});