// Definición de los elementos a cargar
const elements = [
    
    // BILONGO LT
    {
        url: "http://www.bilongolt.com",
        image: "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/272149836_4501268183328737_2255386210510333522_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2anK65A3UDIQ7kNvwFdK4-r&_nc_oc=AdlwM3GTQ7ic0Qhrpo28VHYquR3s69n1FtmbvzeY-aqDretqEyAG1bRu2Lpr-WFTnrU&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=_6a9XTH1uOWj06yWQUp7Vg&oh=00_AfKee-9ioNzOGQApb-iuW6z_WBoVCqSaIy2oMyoVDU6_Ng&oe=681FA0C0",
        title: "Bilongo LT"
    },


    // LOS COJONES
    {
        url: "https://www.instagram.com/loscojonesoeoe",
        image: "https://s1.ppllstatics.com/elcorreo/www/multimedia/202202/09/media/cortadas/rock2-kzvB-U160871286370NdH-624x385@El%20Correo.jpg",
        title: "Los Cojones"
    },


    // VALKYRIA
    {
        url: "https://www.instagram.com/valkyria_oficial/",
        image: "https://fanmusicfest.com/sites/default/files/styles/escrec_125x125/public/Valkyria.jpg",
        title: "Valkyria"
    },


];

// Función para mezclar el array de forma aleatoria (Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Mezcla los elementos
shuffle(elements);

// Selecciona el contenedor de destino
const container = document.getElementById('dynamic-items');

// Para cada elemento, crea la ancla y la imagen
elements.forEach(item => {
    // Crear el elemento <a>
    const link = document.createElement('a');
    link.href = item.url;
    link.target = "_blank";

    // Crear la imagen
    const img = document.createElement('img');
    img.src = item.image;
    img.title = item.title;
    img.style.maxWidth = "500px";
    img.style.width = "100%";
    // Opcional: agrega el mismo id o clase si se requirió para estilos (por ejemplo 'other-images')
    img.id = "other-images";

    // Agrega la imagen al link y el link al contenedor
    link.appendChild(img);

    // Agrega un salto de línea antes y después para separar los elementos
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(link);
});
