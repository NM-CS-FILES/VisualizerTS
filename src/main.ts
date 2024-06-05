import { Canvas, Colors, Position, RGBAColor } from "simply2d";

function drawCircle(
    canvas: Canvas, 
    center: Position, 
    radius: number, 
    color: RGBAColor = Colors.WHITE 
) : void {
    canvas.drawArc(color, center, radius, 0, Math.PI);
    canvas.drawArc(color, center, radius, Math.PI, Math.PI * 2);
}

function drawArrow(
    canvas: Canvas, 
    from: Position, 
    to: Position, 
    color: RGBAColor = Colors.WHITE
) : void {
    canvas.drawLine(color, from, to);

    let dpos = { x : to.x - from.x, y : to.y - from.y };
    let dist = Math.sqrt(dpos.x * dpos.x + dpos.y * dpos.y);

    let slope = dpos.y / dpos.x;
    let slopeAngle = Math.atan(slope)
    let theta = (140 * Math.PI / 180);

    let p1Theta = theta + slopeAngle;
    let p2Theta = -theta + slopeAngle;
    
    if (to.x < from.x) {
        p1Theta += Math.PI;
        p2Theta += Math.PI;
    }

    let p1 = canvas.convertPolarCoords(to, p1Theta, dist / 10);
    canvas.drawLine(color, to, p1);

    let p2 = canvas.convertPolarCoords(to, p2Theta, dist / 10);
    canvas.drawLine(color, to, p2);
}

const canvas = new Canvas("Testing", 500, 500);

let pos = canvas.CENTER;

canvas.convertPolarCoords

drawArrow(canvas, { x: 0, y: 0 }, canvas.CENTER);
drawArrow(canvas, { x: 500, y: 500 }, canvas.CENTER);
drawArrow(canvas, { x: 0, y: 500 }, canvas.CENTER);
drawArrow(canvas, { x: 500, y: 0 }, canvas.CENTER);

canvas.sleep(5000);