function buttonPress(option){
    var paragraph = document.getElementById("ShowingDetails");

    if (option == 'Allergens') {
        paragraph.innerHTML = "Allegrens Allegrens Allegrens Allegrens Allegrens";
    }
    if (option == 'Build') {
        paragraph.innerHTML = "Build Build Build Build Build Build Build";
    }
    if (option == 'Others') {
        paragraph.innerHTML = "Others Others Others Others Others Others";
    }
}



// script.js

// Dane dla artyku³ów z pliku (za³ó¿my, ¿e s¹ to dane w formacie JSON)
const articleDataFromFile = [
    {
        imageSrc: 'statics/dish1.png',
        imageAlt: 'Spaghetti',
        category: 'Travel',
        title: 'Some title',
        excerpt: 'Lorem ipsum dolor sit amet.'
    },
    // Dodaj wiêcej obiektów z danymi dla kolejnych artyku³ów
];

// Wygenerowanie bloków artyku³ów na podstawie danych z pliku
const articleContainer = document.getElementById('article-container');

articleDataFromFile.forEach(data => {
    // Tworzenie elementów HTML dla artyku³u
    const articleCard = document.createElement('article');
    articleCard.setAttribute('class', 'article-card');

    const figure = document.createElement('figure');
    figure.setAttribute('class', 'article-image');

    const img = document.createElement('img');
    img.setAttribute('src', data.imageSrc);
    img.setAttribute('alt', data.imageAlt);

    const articleContent = document.createElement('div');
    articleContent.setAttribute('class', 'article-content');

    const categoryLink = document.createElement('a');
    categoryLink.setAttribute('href', '#');
    categoryLink.setAttribute('class', 'card-category');
    categoryLink.textContent = data.category;

    const title = document.createElement('h3');
    title.setAttribute('class', 'card-title');
    title.textContent = data.title;

    const excerpt = document.createElement('p');
    excerpt.setAttribute('class', 'card-excerpt');
    excerpt.textContent = data.excerpt;

    // Dodawanie utworzonych elementów do struktury artyku³u
    figure.appendChild(img);
    articleContent.appendChild(categoryLink);
    articleContent.appendChild(title);
    articleContent.appendChild(excerpt);

    articleCard.appendChild(figure);
    articleCard.appendChild(articleContent);

    // Dodawanie artyku³u do kontenera
    articleContainer.appendChild(articleCard);
});
