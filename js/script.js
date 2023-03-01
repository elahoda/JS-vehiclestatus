const button = document.querySelector("button");
const needsRepair = document.querySelector("needs-repair");

const createVehicle = function (type, numWheels, color) {
  let vehicle = {
    type: type,
    numwheels: numWheels,
    color: color
  };
  return vehicle;
};

const car = createVehicle("car", "4", "red");
const bike = createVehicle("bike", "2", "green");
const skateboard = createVehicle("skateboard", "4", "white");
//console.log(car, bike, skateboard);

const myVehicles = [car, bike, skateboard];
for (let vehicle of myVehicles){
for (let key in vehicles) {
  console.log(key, myVehicles[key]);
  }
}

bike.needsRepair = true;
skateboard.needsRepair = true;

button.addEventListener("click", function () {
  repairList.innerText = "";
  const vehicleRepairList = 

  if ((this.needsRepair = true)) {
    let vehicleRepairList = [myVehicles.needsRepair];
  }
});
for (let item in vehicleRepairList) {
  console.log(`my ${vehicle} needs some love `)
  repairList.append()
}
