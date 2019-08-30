// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
  let header = document.createElement('div');
  header.classList.add('header');

  let date = document.createElement('span');
  date.classList.add('date');
  date.textContent = 'MARCH 28, 2019';
  header.appendChild(date);

  let h1 = document.createElement('h1');
  h1.textContent = 'Lambda Times';
  header.appendChild(h1);

  let temp = document.createElement('span');
  temp.classList.add('temp');
  temp.textContent = '98°';
  header.appendChild(temp);

  console.log(header);
  return header;
}

const container = document.querySelector('.header-container')

container.appendChild(Header())