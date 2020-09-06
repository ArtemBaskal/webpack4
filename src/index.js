import Post from "@models/Post";
import json from './assets/json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import WebpackLogo from '@/assets/webpack-logo.png';
import * as $ from 'jquery';
import './styles/styles.css';

const post = new Post('Webpack Post', WebpackLogo);

$('pre').addClass('code').html(post.toString())

// console.log(post.toString());
// console.log('JSON:', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);
