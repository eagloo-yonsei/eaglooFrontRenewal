import React from 'react';
import styled from 'styled-components';

class Board extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  timeout;
  ctx;

  componentDidMount() {
    this.drawOnCanvas();
  }

  componentWillReceiveProps(newProps) {
    this.ctx.strokeStyle = newProps.color;
    this.ctx.lineWidth = newProps.size;
  }

  drawOnCanvas() {
    var canvas: any = document.querySelector('#board');
    this.ctx = canvas.getContext('2d');
    var ctx = this.ctx;

    var sketch = document.querySelector('#sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    canvas.height = parseInt(sketch_style.getPropertyValue('height'));

    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    /* Mouse Capturing Work */
    canvas.addEventListener(
      'mousemove',
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    /* Drawing on Paint App */
    ctx.lineWidth = this.props.size;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = this.props.color;

    canvas.addEventListener(
      'mousedown',
      function (e) {
        canvas.addEventListener('mousemove', onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      'mouseup',
      function () {
        canvas.removeEventListener('mousemove', onPaint, false);
      },
      false
    );

    var root = this;
    var onPaint = function () {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      ctx.stroke();

      if (root.timeout !== undefined) clearTimeout(root.timeout);
      root.timeout = setTimeout(function () {
        var base64ImageData = canvas.toDataURL('image/png');
      }, 1000);
    };
  }

  render() {
    return (
      <StyledWrapper id="sketch">
        <canvas id="board" className="board" />
      </StyledWrapper>
    );
  }
}

export default Board;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  canvas {
    background: white;
    width: 100%;
    height: 100%;
  }
`;
