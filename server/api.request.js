function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function writeToMongoDB(data) {
  return sleep(300);
}

function writeToMemory(data) {
  return sleep(50);
}

function writeToQueue(data) {
  return sleep(20);
}

// wait to write inside mongodb
function mongodb(req, res) {
  writeToMongoDB(res.body).then(() => {
    console.log("Data written into MongoDB");
    res.send("Success from MongoDB");
  });
}
function mongodbAsync(req, res) {
  writeToMongoDB(res.body).then(() => {
    console.log("Data written into MongoDB");
  });
  res.send("Success from mongodbAsync");
}

function memory(req, res) {
  writeToMemory(res.body).then(() => {
    console.log("Data written into Memory");
    res.send("Success from memory");
  });
}
function memoryAsync(req, res) {
  writeToMemory(res.body).then(() => {
    console.log("Data written into Memory");
  });
  res.send("Success from memoryAsync");
}
function messageQueue(req, res) {
  writeToQueue(res.body).then(() => {
    console.log("Data written into messageQueue");
    res.send("Success from messageQueue");
  });
}

module.exports = { mongodb, mongodbAsync, memory, memoryAsync, messageQueue };
