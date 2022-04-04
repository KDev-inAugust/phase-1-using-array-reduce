const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries =[]
batteries= batteryBatches.reduce(function(total, next){
   let result = total + next; totalBatteries=result; return totalBatteries;
}, 0);



console.log(batteries);

