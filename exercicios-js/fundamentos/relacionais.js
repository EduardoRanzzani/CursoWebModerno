console.log("01)", "1" == 1);
console.log("02)", "1" === 1);
console.log("03)", "3" != 3);
// true because the values are different types (string vs number)
console.log("04)", "3" !== 3);
console.log("05)", 3 < 2);
console.log("06)", 3 > 2);
console.log("07)", 3 <= 2);
// false, not less than or equal to! It's just a comparison operator like any other...
console.log("08)", 3 >= 2);
const d1 = new Date(0);
const d2 = new Date(0);
// false because they are different objects in memory
console.log("09)", d1 === d2);
// false because they are different objects in memory
console.log("10)", d1 == d2);
// true because they are the same value
console.log("11)", d1.getTime() === d2.getTime());
// true because they are the same value
console.log("12)", undefined == null);
// false because they are different types
console.log("13)", undefined === null);