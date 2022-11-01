// code your solution here

function superbowlWin(record){
    const found = record.find(object => object.result === "W");
  if(found){
    return found.year;
  }
  else{
    console.log("undefined");
  }
}