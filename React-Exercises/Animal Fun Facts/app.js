import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

/* Add Title */
const title = "";

/* Add Background */
const background = (
  <img 
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"/>
);

const showBackground = Math.random() > 0.5 ? true : false;

/* Animal Images */
const images = [];
for (let animal in animals) {
  images.push((
    <img
      onClick={displayFact} 
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"/>
));
}

/* Display Function */
function displayFact(e) {
  let name = e.target.alt;
  let factsArray = animals[name].facts;
  let randomIndexedFact = Math.floor(Math.random() * factsArray.length);
  let funFact = factsArray[randomIndexedFact];
  let fact = document.getElementById('fact');
  fact.innerHTML = funFact;
  fact.style.color = showBackground ? '#fff' : '#000';
}

/* Render the App */
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">
      {images}
    </div>
  </div>
);  

root.render(animalFacts);