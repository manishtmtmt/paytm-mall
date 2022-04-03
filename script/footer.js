// footer start
var links = [
    {name:"Mobile", url:"mobiles.html"},{name:"Mobile Store", url:"mobilesstore.html"},{name:"Smartphones", url:"smartphones.html"},{name:"Feature Phones", url:"featurephone.html"},{name:"Tablets", url:"tablets.html"},{name:"Calling Tablets", url:"callingtablets.html"},{name:"Smart Watches", url:"smartwatches.html"},{name:"Mobile Accessories", url:"mobileaccessories.html"},{name:"Headphones and Headsets", url:"headphonesandheadsets.html"},{name:"Bluetooth Headsets", url:"bluetoothheadsets.html"},{name:"Wired Headphone", url:"wiredheadphone.html"},{name:"VR Headsets", url:"vrheadsets.html"},{name:"Mobile Screen Guards", url:"mobilescreenguards.html"},{name:"Mobile Cases and Covers", url:"mobilecasesandcovers.html"},{name:"Power Banks", url:"powerbanks.html"},{name:"Selfie Sticks", url:"selfiesticks.html"},{name:"Mobile Chargers", url:"mobilechargers.html"},{name:"Card Readers", url:"cardreaders.html"},{name:"iPhones", url:"iphones.html"},{name:"4G mobiles", url:"4gmobiles.html"}
];

function openTab(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
    }

var x = document.querySelectorAll(".links-container")

for (var i=0; i<x.length; i++) {
    links.map(function(el){
        var div1 = document.createElement("div")
        x[i].append(div1)

        var link = document.createElement("a")
        link.setAttribute("href",el.url)
        link.innerText = el.name;4

        div1.append(link)
    })
}
// footer end
