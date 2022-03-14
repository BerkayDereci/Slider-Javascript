var models = [
    {
        name: 'Üzüm',
        image: 'img/uzum.jpeg',
        desc: '500g',
        link: 'https://getir.com/urun/cekirdeksiz-uzum-R59HTy0HZ9/'
    },
    {
        name: 'Mandalina',
        image: 'img/mandalina.jpeg',
        desc: '1kg',
        link: 'https://getir.com/urun/mandalina-CPIzdc9A86/'
    },
    {
        name: 'İthal Muz',
        image: 'img/muz.jpeg',
        desc: '600g',
        link: 'https://getir.com/urun/ithal-muz-Gqr7FxCtdk/'
    }
];

var index = 0;
var sliderCount = models.length;
var interval;

var settings = {
    duration: '3000',
    random: false
};

init(settings);

//w/ onclick 
function left() {
    index--;
    showSlide(index);
}

function right() {
    index++;
    showSlide(index);
}

// w/ DOM
// document.querySelector('.fa-circle-arrow-left').addEventListener('click', function () {
//     index--;
//     showSlide(index);
//     console.log(index);
// });
// document.querySelector('.fa-circle-arrow-right').addEventListener('click', function () {
//     index++;
//     showSlide(index);
//     console.log(index);
// });

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings) {
    var prev;
    interval = setInterval(function () {
        //Random index
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * sliderCount);
            } while (index == prev);
            prev = index;
        }
        else {
            console.log(index);
            showSlide(index);
            index++;
        }
        showSlide(index);
    }, 
    settings.duration)
}

function showSlide(i) {
    index = i;
    if (i < 0) {
        index = sliderCount - 1;
    }
    if (i >= sliderCount) {
        index = 0;
    }
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-desc').textContent = models[index].desc;
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}


