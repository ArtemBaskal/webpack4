import Post from "@models/Post";
import json from './assets/json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo.png';
import * as $ from 'jquery';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';
import './babel';
import React from 'react';
import {render} from 'react-dom'

const post = new Post('Webpack Post', WebpackLogo);


// console.log(post.toString());
console.log('JSON:', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);

const App = () => <div className="container">
    <h1>Webpack</h1>
    <hr />
    <div className="logo"></div>
    <hr />
    <pre></pre>

    <div className="box">
        <h2>Less</h2>
    </div>

    <div className="card">
        <h2>SCSS</h2>
    </div>
</div>

render(<App />, document.getElementById('app'))
$('pre').addClass('code').html(post.toString())

