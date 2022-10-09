function getPartialId (filePath) {
    console.log("XXXX", filePath)
    return filePath.match(/\/([^/]+\/[^/]+)\.[^.]+$/).pop();
}
module.exports = {
    getPartialId
}