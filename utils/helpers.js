module.exports = function(timestamp) {
  const parsedTime = timestamp.toString();
  const timestampArr = parsedTime.split(" ");
  const timeArr = timestampArr[4].split(":");
  let time = "";
  switch (timeArr[0]) {
    case 0:
      time = `12:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "1":
      time = `01:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "2":
      time = `02:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "3":
      time = `03:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "4":
      time = `04:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "5":
      time = `05:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "6":
      time = `06:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "7":
      time = `07:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "8":
      time = `08:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "9":
      time = `09:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "10":
      time = `10:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "11":
      time = `11:${timeArr[1]}:${timeArr[2]}am`
      break;
    case "12":
      time = `12:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "13":
      time = `01:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "14":
      time = `02:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "15":
      time = `03:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "16":
      time = `04:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "17":
      time = `05:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "18":
      time = `06:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "19":
      time = `07:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "20":
      time = `08:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "21":
      time = `09:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "22":
      time = `10:${timeArr[1]}:${timeArr[2]}pm`
      break;
    case "23":
      time = `11:${timeArr[1]}:${timeArr[2]}pm`
      break;
    default:
      return false;
  }
  return `${timestampArr[0]}, ${timestampArr[1]} ${timestampArr[2]}, ${timestampArr[3]} at ${time}`
}
