let a = 1;
export default function printMe() {
    // console.log('I get called from print.js!');
    console.error('I get called from print.js:' + (a++));
}