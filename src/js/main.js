import sub1 from './modules/sub1';
import sub2 from './modules/sub2';
import "bootstrap";
import '../styles/main.scss';

console.log('コチラは index.js の内容を表示しています。');

const testMessage = () => {
    console.log('Check if ES6 was compiled to ES5.');
}

testMessage();
sub1();
sub2();
