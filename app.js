const fs = require('fs');
const ytdl = require('ytdl-core');

require('dotenv').config();


const API_KEY = process.env.API_KEY;

console.log(API_KEY)


// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

ytdl('https://www.youtube.com/watch?v=zhrojjhx0oo')
  .pipe(fs.createWriteStream('video.mp4'));