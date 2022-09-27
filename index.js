// Code your solution in this file!
function distanceFromHqInBlocks(location){
  const hq = 42;

  if (location > hq){
    return location - hq;
  }else {
    return hq - location;
  }
}
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}
function distanceTravelledInFeet(start, dest){
 if (start > dest){
    return (start - dest) * 264;

 }else{
    return (dest - start) * 264;
 }

}