layer.canvasReady = function(event) {
    var a = new BasicAnimation
    
    a.keyPath = 'strokeStart'
    a.fromValue = 0
    a.toValue = 1
    a.duration = time
    
    this.addAnimation(a)
}