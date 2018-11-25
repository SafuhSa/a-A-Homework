// phase I: callbacks

function titleize(arr, cb) {
   cb(arr.map(name => 'Mx.' + name + 'Jingleheimer Schmidt'));
} 

function printCallback(arr) {
    arr.forEach(title => {
        console.log(title);
    });
}
// titleize(['Mary', 'Brian', 'Leo'], printCallback);
 
// phase II: 

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
    // trumpet.bind(this)
}

    Elephant.prototype.trumpet = function () { console.log(this.name + " the elephant goes 'phrRRRRRR!!!!!'"); }
    Elephant.prototype.grow = function () { console.log(this.height += 12)}
    Elephant.prototype.addTrick = function (trick) { this.tricks.push(trick) }
    Elephant.prototype.play = function () { let idx = Math.floor(Math.random() * this.tricks.length)
        console.log(this.tricks[idx] + ' this is random'); }
    Elephant.paradeHelper = function (eleph) { console.log(eleph.name + ' is trotting by!') }

     // const safuh = new Elephant('saf', 50, [1, 2, 3]);
     // safuh.trumpet()
     // safuh.grow()
     // console.log(safuh.play());
     // console.log(safuh.addTrick('trick'));
     // console.log(safuh.tricks)

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// Elephant.paradeHelper(micah)


function dinerBreakfast() {
    let order = 'scrambled eggs and bacon'
    console.log(order)
    
    return function (food) {
        order = order + " " + food;
        console.log(order);
        
    }
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");