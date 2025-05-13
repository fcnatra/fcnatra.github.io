const bands = [
    {
        name: "AC/DC",
        style: "Jazz",
        imageUrl: "https://imgs.search.brave.com/RMi1g38N7uWvLrXf3785GsnE9x9zxe13yF8LPF9dY8Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXJ0cGhvdG9saW1p/dGVkLmNvbS9pbWFn/ZXMvNTk3NjIwY2E2/ODFhNGU1YjI5NDYy/ZWJlLzcwMHg3MDAv/bGUtZ3JvdXBlLXUy/LWVuLTE5ODcuanBn",
        website: "https://www.acdc.com/home/"
    },
    {
        name: "Queen",
        style: "Rock",
        imageUrl: "https://imgs.search.brave.com/1uEU4rxJk5sHiO4QOvXyFiz02uLJJ3cQ5cbH_xwIPeE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zYXBv/c3lwcmluY2VzYXMu/ZWxtdW5kby5lcy9h/c3NldHMvMjAyMC8x/MC9ncnVwb3MtZGUt/bXVzaWNhLXF1ZWVu/LmpwZw",
        website: "https://queenonlinestore.com/"
    },
    {
        name: "Metallica",
        style: "Rock",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Metallica_wordmark.svg/1920px-Metallica_wordmark.svg.png",
        website: "https://www.metallica.com/"
    },
    {
        name: "The Beatles",
        style: "Pop",
        imageUrl: "https://imgs.search.brave.com/wiO3KVB4J2gYQsTQSX4N8fMVRIzuSBpXeH6-nPaZIEU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/YXNtZWRpYS5lcGlt/Zy5uZXQvcmVzaXpl/ci92Mi81U01EWUxB/NUNCS1NMSURaTktD/QlNPSEpKRS5qcGc_/YXV0aD1kNjViZWE3/YmY3NjVhY2VjNjJh/NDhmZDJlNDFkNjJl/Zjc3ZjVjOTU1OWVm/ODA3NWEyOGY5NjE3/NjA2Y2E0NTk4Jndp/ZHRoPTM3NQ",
        website: "https://www.thebeatles.com/"
    },
    {
        name: "Bilongo LT",
        style: "Hip Hop",
        imageUrl: "https://pbs.twimg.com/profile_images/1494618786015625217/zh-WSJyi_400x400.jpg",
        website: "https://BilongoLT.com"
    },
];

function generateBandCards() {
    const panel = document.getElementById('band-panel');
    const shuffledBands = bands.sort(() => 0.5 - Math.random());

    shuffledBands.forEach(band => {
        const card = document.createElement('div');
        card.className = 'band-card';
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <img src="${band.imageUrl}" alt="${band.name}">
                    <p>${band.name}</p>
                </div>
                <div class="card-back">
                    <h3>${band.style}</h3>
                    <a href="${band.website}" target="_blank">Visit Website</a>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            const innerCard = card.querySelector('.card-inner');
            innerCard.classList.toggle('flipped');
        });

        panel.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', generateBandCards);
