import people from './data.js';

const container = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// nextBtn.addEventListener('click', showNextPerson);
// prevBtn.addEventListener('click', showPrevPerson);

// showNextPerson = () => {};
// showPrevPerson = () => {};

container.innerHTML = people
  .map((person, slideIndex) => {
    console.log(slideIndex);
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === people.length - 1) {
      position = 'last';
    }

    return `
    <article class="slide ${position}">
    <img src="${img}" alt="${name}" class="img" />
    <h4>${name}</h4>
    <p class="title">${job}</p>
    <p class="text">${text}</p>
    </article>
`;
  })
  .join('');
