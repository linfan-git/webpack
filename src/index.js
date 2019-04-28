import _ from "lodash"
import './style.css'
import printMe from './print.js'

function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    button.innerHTML = 'Click Me';
    button.onclick = printMe;
    element.appendChild(button);
  
    return element;
  }
  
  document.body.appendChild(component());