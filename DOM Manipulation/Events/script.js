/* Method 2
const btn = document.querySelector('#btn');

btn.onclick = () => alert('Greetings, friend.');
*/

/* Method 3 */
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    alert('Aloha, friend.');
});

/* Using callbacks, i.e., 
functions to call functions */

// This method is equivalent to
btn.addEventListener('click', function(e) {
    // e.target.style.background = 'blue';
    // console.log(e); 
    console.log(e.target); 
});

// this method:
btn.addEventListener('click', onClickFunction);

function onClickFunction(e) {
    e.target.style.background = 'blue';
}