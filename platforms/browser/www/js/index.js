var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

const url = ("http://temmytammy.onlinewebshop.net/wp-json/wp/v2/posts");
const postsdiv = document.getElementById('get-post')

let final = ""

function getposts() {
    console.log("fetch in progress")
    fetch(url).then((res) => res.json()).then(function(posts) {
        posts.forEach(function(post) {
            final += `<div class= "col-md-6"> <h3>Title:${post.title.rendered}</h3><p>Date:${post.date.split('').splice(0,10).join('')}
${post.content.rendered}

</div>
`

        })
        postsdiv.innerHTML = final;
        console.log(posts)

    })
}
getposts();

const accidenturl = "http://temmytammy.onlinewebshop.net/wp-json/wp/v2/posts/?categories=2"
const fighturl = "http://temmytammy.onlinewebshop.net/wp-json/wp/v2/posts/?categories=3"
const rapeurl = "http://temmytammy.onlinewebshop.net/wp-json/wp/v2/posts/?categories=6"
const floodurl = "http://temmytammy.onlinewebshop.net/wp-json/wp/v2/posts/?categories=5"


const accident = document.getElementById("accident");
const fight = document.getElementById("fight");
const rape = document.getElementById("rape");
const flood = document.getElementById("flood");

accident.addEventListener("click", getaccpost);
fight.addEventListener("click", getfightpost);
rape.addEventListener("click", getrapepost);
flood.addEventListener("click", getfloodpost);


function getaccpost() {
    console.log("fetch in progress")
    postsdiv.innerHTML = ""
    final = ""
    fetch(accidenturl).then((res) => res.json()).then(function(data) {
        console.log(typeof data)
        console.log(data)
        data.forEach(function(post) {
            final += `<div class= "col-md-6"> <h3>Title:${post.title.rendered}</h3><p>Date:${post.date.split('').splice(0,10).join('')}
${post.content.rendered}

</div>
`

        })
        postsdiv.innerHTML = final;
        console.log(data)

    })
}

function getfightpost() {
    console.log("fetch in progress")
    postsdiv.innerHTML = ""
    final = ""
    fetch(fighturl).then((res) => res.json()).then(function(data) {
        console.log(typeof data)
        console.log(data)
        data.forEach(function(post) {
            final += `<div class= "col-md-6"> <h3>Title:${post.title.rendered}</h3><p>Date:${post.date.split('').splice(0,10).join('')}
${post.content.rendered}

</div>
`

        })
        postsdiv.innerHTML = final;
        console.log(data)

    })
}

function getrapepost() {
    console.log("fetch in progress")
    postsdiv.innerHTML = ""
    final = ""
    fetch(rapeurl).then((res) => res.json()).then(function(data) {
        console.log(typeof data)
        console.log(data)
        data.forEach(function(post) {
            final += `<div class= "col-md-6"> <h3>Title:${post.title.rendered}</h3><p>Date:${post.date.split('').splice(0,10).join('')}
${post.content.rendered}

</div>
`

        })
        postsdiv.innerHTML = final;
        console.log(data)

    })
}


function getfloodpost() {
    console.log("fetch in progress")
    postsdiv.innerHTML = ""
    final = ""
    fetch(floodurl).then((res) => res.json()).then(function(data) {
        console.log(typeof data)
        console.log(data)
        data.forEach(function(post) {
            final += `<div class= "col-md-6"> <h3>Title:${post.title.rendered}</h3><p>Date:${post.date.split('').splice(0,10).join('')}
${post.content.rendered}

</div>
`

        })
        postsdiv.innerHTML = final;
        console.log(data)

    })
}


const submit = document.getElementById('submit')

submit.addEventListener('click', function sendpost(e) {

    e.preventDefault()
    const postcat = document.getElementById('inputState').value

    let postdata = {
        "title": document.getElementById('title').value,
        "content": document.getElementById('description').value,
        "status": 'publish',
        "categories": [postcat]
    }


    fetch("http://temmytammy.onlinewebshop.net/wp-json/wp/v2/posts", {
            method: "POST",
            headers: {

                'Content-Type': 'application/json',

                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90ZW1teXRhbW15Lm9ubGluZXdlYnNob3AubmV0IiwiaWF0IjoxNTY0MjI5NTAzLCJuYmYiOjE1NjQyMjk1MDMsImV4cCI6MTU2NDgzNDMwMywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.aVRmUfImW34ssGRp8Cr_gX80w23hJGymfmZQjSfZF1Q"
            },

            'crossOrigin': true,
            body: JSON.stringify(postdata)
        })
        .then((response) => {
            console.log(postdata)
            document.location.reload();

        });

})



document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log(navigator.camera);
}
document.getElementById("upload").addEventListener("click", uploadImg);

function uploadImg() {
    console.log('uploadddd')
    navigator.camera.getPicture(onSuccess, onFail, {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });

    function onSuccess(imageURL) {
        console.log('successful')
        console.log(imageURL)
        var image = document.getElementById("uploadedimg");
        image.src = imageURL;

    }

    function onFail(message) {
        alert(message);
    }

}

document.getElementById("btn").addEventListener("click", TakePhoto)

function TakePhoto() {
    navigator.camera.getPicture(onSuccess, onFail, {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA
    });

    function onSuccess(imageURL) {
        var image = document.getElementById("myImage");
        image.src = imageURL;
    }

    function onFail(message) {
        alert(message)
    }
}

function onDeviceReady() {
    document.getElementById("getPosition").addEventListener("click", getPosition);
}

// function getPosition() {
//     var options = {
//         enableHighAccuracy: true,
//         maximumAge: 3600000
//     }
//     var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

//     function onSuccess(position) {
//         alert('Latitude: ' + position.coords.latitude + '\n' +
//             'Longitude: ' + position.coords.longitude + '\n' +
//             'Altitude: ' + position.coords.altitude + '\n' +
//             'Accuracy: ' + position.coords.accuracy + '\n' +
//             'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
//             'Heading: ' + position.coords.heading + '\n' +
//             'Speed: ' + position.coords.speed + '\n' +
//             'Timestamp: ' + position.timestamp + '\n');
//     };

//     function onError(error) {
//         alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
//     }
// }

document.getElementById("getPosition").addEventListener("click", getPos);

function getPos() {

    var options = {
        enableHighAccuracy: true,
        maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    };

    function onError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
}