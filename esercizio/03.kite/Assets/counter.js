layer.canvasReady = function(event) {
    time = time
}

layer.tick = function(layer) {
    time = time == 0 ? 0 : time -1
    this.string = time.toString()
}