#!/usr/bin/env node
const buff = [];

function camel(str) {
  // TODO
  const strArr = str.split('');
  for (let i = 1; i < strArr.length; i++) {
      if (strArr[i] === '-' || strArr[i] === '_' || strArr[i] === '@') {
          strArr.splice(i,1);
          if(i < strArr.length){
              strArr[i] = strArr[i].toUpperCase();
          }
      }
  }
  return strArr.join('');
};


process.stdin.on('data', (data) => {
    buff.push(data)
    const input = Buffer.concat(buff).toString('UTF-8');
    
    process.stdout.write(camel(input));
});

process.stdin.once('end', () => {
    const input = Buffer.concat(buff).toString('UTF-8');
    
    process.stdout.write(camel(input));
});