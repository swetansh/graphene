import './stylesheets/main.less';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {render} from 'react-dom';
import App from './src/app';

// init shell
initShell();

function initShell() {
    var shell = document.createElement('main');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    render(<App />, shell);
}