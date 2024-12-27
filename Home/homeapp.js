//header

let menu = document.querySelectorAll('.menu-text');
menu.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.toggle("hover-element");
    });
    item.addEventListener("mouseout", () => {
        item.classList.toggle("hover-element");
    });
});

let login = document.querySelector(".login");

login.addEventListener("mouseover", () => {
    login.classList.toggle("login-hover");
});
login.addEventListener("mouseout", () => {
    login.classList.toggle("login-hover");
});

// Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const menuMobile = document.querySelector('.menu-mobile');

burgerMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('dis-none');
});


//calculyator

let calculyatorResultText = document.querySelector('.calculyator-result .calculyator-result-text');

let weightInput = document.querySelector('.weight');
let aznValueElement = document.querySelector('.azn .calculyator-value');
let usdValueElement = document.querySelector('.usd .calculyator-value');
let countrySelect = document.querySelector(".country-img-select select");
let calculyatorValyutaText = document.querySelector(".calculyator-valyuta-text");

const calculateValues = () => {
    let weight = Number(weightInput.value);

    if (countrySelect.value === "abs") {
        let aznValue;
        let usdValue;
        if (weight > 0 && weight <= 0.1) {
            aznValue = 3.01;
            usdValue = 1.77;
        } else if (weight > 0.1 && weight <= 0.25) {
            aznValue = 6.41;
            usdValue = 3.77;
        } else if (weight > 0.25 && weight <= 0.5) {
            aznValue = 9.81;
            usdValue = 5.77;
        } else if (weight > 0.5 && weight <= 0.75) {
            aznValue = 11.51;
            usdValue = 6.77;
        } else if (weight > 0.75 && weight <= 1) {
            aznValue = 13.21;
            usdValue = 7.77;
        } else if (weight > 1 && weight <= 30) {
            aznValue = weight * 13.21;
            usdValue = weight * 7.77;
        } else if (weight > 30) {
            calculyatorResultText.textContent = "Max Çəki = 30kq!";
            calculyatorValyutaText.classList.add('dis-none');
            calculyatorResultText.classList.remove('dis-none');
            return;
        } else {
            aznValue = 0.00;
            usdValue = 0.00;
        }
        aznValueElement.textContent = aznValue.toFixed(2);
        usdValueElement.textContent = usdValue.toFixed(2);
        calculyatorValyutaText.classList.remove("dis-none");
        calculyatorResultText.classList.add("dis-none");
    } else if (countrySelect.value === "turkiye") {
        let aznValue;
        let usdValue;
        if (weight > 0 && weight <= 0.1) {
            aznValue = 1.28;
            usdValue = 0.75;
        } else if (weight > 0.1 && weight <= 0.25) {
            aznValue = 2.98;
            usdValue = 1.75;
        } else if (weight > 0.25 && weight <= 0.5) {
            aznValue = 4.68;
            usdValue = 2.75;
        } else if (weight > 0.5 && weight <= 0.75) {
            aznValue = 5.95;
            usdValue = 3.50;
        } else if (weight > 0.75 && weight <= 1) {
            aznValue = 6.61;
            usdValue = 3.89;
        } else if (weight > 1 && weight <= 30) {
            aznValue = weight * 6.61;
            usdValue = weight * 3.89;
        } else if (weight > 30) {
            calculyatorResultText.textContent = "Max Çəki = 30kq!";
            calculyatorValyutaText.classList.add('dis-none');
            calculyatorResultText.classList.remove('dis-none');
            return;
        } else {
            aznValue = 0.00;
            usdValue = 0.00;
        }
        aznValueElement.textContent = aznValue.toFixed(2);
        usdValueElement.textContent = usdValue.toFixed(2);
        calculyatorValyutaText.classList.remove("dis-none");
        calculyatorResultText.classList.add("dis-none");
    }
};

countrySelect.addEventListener("change", calculateValues);

weightInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^0-9.,]/g, '');
    let item = e.target.value.split("");
    let count = 0;
    for (let i = 0; i < item.length; i++) {
        if (item[i] === '.') {
            count++;
            if (count > 1) {
                item[i] = "";
            }
        }
    }
    if (item[0] == '.') {
        item[0] = "0.";
    }
    if (item[0] == 0) {
        for (let i = 1; i <= item.length; i++) {
            if (item[1] != ".") {
                if (item[i] == "1" || item[i] == "2" || item[i] == "3" || item[i] == "4" || item[i] == "5" || item[i] == "6" || item[i] == "7" || item[i] == "8" || item[i] == "9") {
                    for (let j = 0; j < i; j++) {
                        item[j] = "";
                    }
                }
            }
            if (item[i] == ".") {
                for (let j = 1; j < i; j++) {
                    item[j - 1] = "";
                }
            }
        }
    }
    let newItem = item.join('');
    e.target.value = newItem;
    calculateValues();
});



//tariffs
document.getElementById('abs-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.add('active');
    document.getElementById('abs').classList.remove('dis-none');
    document.getElementById('turkiye').classList.remove('active');
    document.getElementById('turkiye').classList.add('dis-none');
    document.getElementById('daxili').classList.remove('active');
    document.getElementById('daxili').classList.add('dis-none');
});

document.getElementById('turkiye-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.remove('active');
    document.getElementById('abs').classList.add('dis-none');
    document.getElementById('turkiye').classList.add('active');
    document.getElementById('turkiye').classList.remove('dis-none');
    document.getElementById('daxili').classList.remove('active');
    document.getElementById('daxili').classList.add('dis-none');
});

document.getElementById('daxili-btn').addEventListener('click', function() {
    document.getElementById('abs').classList.remove('active');
    document.getElementById('abs').classList.add('dis-none');
    document.getElementById('turkiye').classList.remove('active');
    document.getElementById('turkiye').classList.add('dis-none');
    document.getElementById('daxili').classList.add('active');
    document.getElementById('daxili').classList.remove('dis-none');
});



function loadScript() {
    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB7wCuDhJj4o4cfDXp3CfPy_ioL4nTNuq0&callback=initMap';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

function initMap() {
    // Ünvanlar və koordinatlar
    let locations = [
        {lat: 40.378271, lng: 49.847784, name: "PandaTrail 28 May filialI"},
        {lat: 40.400736, lng: 49.852602, name: "PandaTrail Gənclik filialı"},
        {lat: 40.402997, lng: 49.872163, name: "PandaTrail Nərimanov Filialı"},
        {lat: 40.382937, lng: 49.871805, name: "PandaTrail Xətai Filialı"},
        {lat: 40.366390, lng: 49.831303, name: "PandaTrail İşərişəhər Filialı"},
        {lat: 40.366390, lng: 49.819854, name: "PandaTrail Nizami Filialı"},
        {lat: 40.409221, lng: 49.805117, name: "PandaTrail 20 Yanvar Filialı"},
        {lat: 40.429918, lng: 49.761283, name: "PandaTrail Avtovağzal Filialı"}
    ];

    // Xəritə parametrləri
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 40.378271, lng: 49.847784},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    let labels = [];

    // Hər ünvan üçün marker əlavə edin
    locations.forEach(function(location) {
        let marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.lng},
            map: map,
            title: location.name,
            icon: {
                url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
                scaledSize: new google.maps.Size(27, 43)
            }
        });

        let labelOverlay = function(position, text, map) {
            this.position = position;
            this.text = text;
            this.map = map;

            this.div = null;
            this.setMap(map);
        };

        labelOverlay.prototype = new google.maps.OverlayView();

        labelOverlay.prototype.onAdd = function() {
            let div = document.createElement('div');
            div.className = 'marker-label';
            div.innerHTML = this.text;
            this.div = div;

            let panes = this.getPanes();
            panes.overlayLayer.appendChild(div);
        };

        labelOverlay.prototype.draw = function() {
            let overlayProjection = this.getProjection();
            let position = overlayProjection.fromLatLngToDivPixel(this.position);

            let div = this.div;
            div.style.left = position.x + 'px';
            div.style.top = position.y + 'px';
        };

        labelOverlay.prototype.onRemove = function() {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
        };

        let label = new labelOverlay(marker.getPosition(), location.name, map);
        labels.push(label);

        map.addListener('zoom_changed', function() {
            let currentZoom = map.getZoom();
            labels.forEach(function(label) {
                if (currentZoom < 14) {
                    label.div.style.display = 'none';
                } else {
                    label.div.style.display = 'block';
                    label.div.style.fontSize = (currentZoom < 14) ? '14px' : '16px';
                }
            });
        });

        map.addListener('bounds_changed', function() {
            labels.forEach(function(label) {
                label.draw();
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', loadScript);

document.addEventListener('DOMContentLoaded', function () {
    const locationNames = document.querySelectorAll('.location-name');
    const locationAbouts = document.querySelectorAll('.location-about');
    const arrowsRight = document.querySelectorAll('.arrow-right');
    const arrowsBottom = document.querySelectorAll('.arrow-bottom');

    locationNames.forEach((locationName, index) => {
        locationName.addEventListener('click', () => {
            if(document.getElementsByClassName("active-location").length > 0){
                document.getElementsByClassName("active-location")[0].classList.remove("active-location")            
            }
            locationName.classList.toggle("active-location")

            locationAbouts.forEach((about, idx) => {
                if (index === idx) {
                    about.classList.toggle('dis-none');
                    arrowsRight[idx].classList.toggle('dis-none');
                    arrowsBottom[idx].classList.toggle('dis-none');
                } else {
                    about.classList.add('dis-none');
                    arrowsRight[idx].classList.remove('dis-none');
                    arrowsBottom[idx].classList.add('dis-none');
                }
            });
            arrowsBottom.forEach(item =>{
                if(item.classList.contains('dis-none')){
                    item.parentElement.parentElement.classList.remove("active-location")
                }
            })
            
        });
    });
});


const opinions = document.querySelector('.shops');
const opinionItems = opinions.innerHTML; 
opinions.innerHTML += opinionItems;