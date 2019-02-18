$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    const tool = new Tool();
    const c = Shape.Circle(200,200,80);
    c.fillColor = 'skyblue';
    const text = new PointText(155,205);
    text.justification - 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    
    tool.onMouseDown = function (event) {
        let c = Shape.Circle(event.point, 20);
        console.log(event.point)
        c.fillColor = 'yellowgreen';
    }

    paper.view.draw();
})