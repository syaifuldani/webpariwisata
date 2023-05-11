// HAMBURGER MENU
const mainMenu = document.querySelector('.menu')
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show (){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}

// END HAMBURGER MENU

const ketikan = document.querySelector(".deskripsi");
const event = document.querySelector(".mouseout");

            // METHODE ONCLICK // 
// let inputan = document.querySelector(".inputan");
// let srchbutton = document.querySelector(".srchbutton");

ketikan.addEventListener("mouseover", myFunction);
event.addEventListener("mouseout", myFunction2);

function myFunction(){
    ketikan.style.backgroundColor = "red";
};

function myFunction2(){
    event.style.backgroundColor = "white";
};

// Search 

function searchGoogle() {
// Dapatkan kueri dari kolom input
    const query = document.querySelector('input[name="query"]').value;
// membuat URL pencarian Google
    const searchUrl = `https://www.google.com/search?q=${query}`;
// Buka halaman hasil pencarian di jendela baru
    window.open(searchUrl, '_blank');
}
        //METHOD ONCLICK //
// srchbutton.onclick = function(){
//     let url = "https://www.google.com/search?q="+inputan.value;
//     window.open(url,'_self');
// };

// End Search
