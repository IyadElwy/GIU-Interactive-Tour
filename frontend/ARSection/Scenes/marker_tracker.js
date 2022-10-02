BusinessMark.addEventListener("markerFound", (e) => {
    console.log("marker found Business");
    const user_id = document.cookie.split('user_id=')[1].split(';')[0];

    fetch(`${location.origin}/users/byid/${user_id}`, {
        method: 'GET'
    })
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
        // This is the JSON from our response
        let locations = data.data.data.Locations;
        locations = locations.map(x => {
            if (x.location === 'Business') {
                return {
                    location: 'Business',
                    seen: true,
                    _id: x._id
                }
            } else {
                return x
            }
        })

        fetch(`${location.origin}/users/${user_id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Locations: locations
            })
        })
            .then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (data) {
            // This is the JSON from our response
            console.log(data.data.data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });


});
BusinessMark.addEventListener("markerLost", (e) => {
    console.log("marker Lost Business");
});


VidMark.addEventListener("markerFound", (e) => {

    const user_id = document.cookie.split('user_id=')[1].split(';')[0];

    fetch(`${location.origin}/users/byid/${user_id}`, {
        method: 'GET'
    })
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
        // This is the JSON from our response
        let locations = data.data.data.Locations;
        locations = locations.map(x => {
            if (x.location === 'GIU Logo') {
                return {
                    location: 'GIU Logo',
                    seen: true,
                    _id: x._id
                }
            } else {
                return x
            }
        })

        fetch(`${location.origin}/users/${user_id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Locations: locations
            })
        })
            .then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (data) {
            // This is the JSON from our response
            console.log(data.data.data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    var video = document.querySelector("#giu");
    console.log("marker found video");
    video.play();

});
VidMark.addEventListener("markerLost", (e) => {
    var video = document.querySelector("#giu");
    console.log("marker Lost video");
    video.pause();
});

GDSCMark.addEventListener("markerFound", (e) => {
    console.log("marker found GDSC");
    const user_id = document.cookie.split('user_id=')[1].split(';')[0];

    fetch(`${location.origin}/users/byid/${user_id}`, {
        method: 'GET'
    })
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
        // This is the JSON from our response
        let locations = data.data.data.Locations;
        locations = locations.map(x => {
            if (x.location === 'GDSC Logo') {
                return {
                    location: 'GDSC Logo',
                    seen: true,
                    _id: x._id
                }
            } else {
                return x
            }
        })

        fetch(`${location.origin}/users/${user_id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Locations: locations
            })
        })
            .then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (data) {
            // This is the JSON from our response
            console.log(data.data.data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
});
GDSCMark.addEventListener("markerLost", (e) => {
    console.log("marker Lost GDSC");
});

PharamaMark.addEventListener("markerFound", (e) => {
    console.log("marker found Pharama");
    const user_id = document.cookie.split('user_id=')[1].split(';')[0];

    fetch(`${location.origin}/users/byid/${user_id}`, {
        method: 'GET'
    })
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
        // This is the JSON from our response
        let locations = data.data.data.Locations;
        locations = locations.map(x => {
            if (x.location === 'Pharmaceutical') {
                return {
                    location: 'Pharmaceutical',
                    seen: true,
                    _id: x._id
                }
            } else {
                return x
            }
        })

        fetch(`${location.origin}/users/${user_id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Locations: locations
            })
        })
            .then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (data) {
            // This is the JSON from our response
            console.log(data.data.data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
});
PharamaMark.addEventListener("markerLost", (e) => {
    console.log("marker Lost   Pharama");
});

EngineeringMark.addEventListener("markerFound", (e) => {
    console.log("marker found Engineering");
    const user_id = document.cookie.split('user_id=')[1].split(';')[0];

    fetch(`${location.origin}/users/byid/${user_id}`, {
        method: 'GET'
    })
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
        // This is the JSON from our response
        let locations = data.data.data.Locations;
        locations = locations.map(x => {
            if (x.location === 'Engineering') {
                return {
                    location: 'Engineering',
                    seen: true,
                    _id: x._id
                }
            } else {
                return x
            }
        })

        fetch(`${location.origin}/users/${user_id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Locations: locations
            })
        })
            .then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (data) {
            // This is the JSON from our response
            console.log(data.data.data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
});
EngineeringMark.addEventListener("markerLost", (e) => {
    console.log("marker Lost engineering");
});

CSMark.addEventListener("markerFound", (e) => {
    console.log("marker found CS");
    const user_id = document.cookie.split('user_id=')[1].split(';')[0];

    fetch(`${location.origin}/users/byid/${user_id}`, {
        method: 'GET'
    })
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
        // This is the JSON from our response
        let locations = data.data.data.Locations;
        locations = locations.map(x => {
            if (x.location === 'Computer Science') {
                return {
                    location: 'Computer Science',
                    seen: true,
                    _id: x._id
                }
            } else {
                return x
            }
        })

        fetch(`${location.origin}/users/${user_id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Locations: locations
            })
        })
            .then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (data) {
            // This is the JSON from our response
            console.log(data.data.data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
});
CSMark.addEventListener("markerLost", (e) => {
    console.log("marker Lost CS");
});

ArchMark.addEventListener("markerFound", (e) => {
    console.log("marker found Arch");
    const user_id = document.cookie.split('user_id=')[1].split(';')[0];

    fetch(`${location.origin}/users/byid/${user_id}`, {
        method: 'GET'
    })
        .then(function (response) {
            // The API call was successful!
            return response.json();
        }).then(function (data) {
        // This is the JSON from our response
        let locations = data.data.data.Locations;
        locations = locations.map(x => {
            if (x.location === 'Architecture') {
                return {
                    location: 'Architecture',
                    seen: true,
                    _id: x._id
                }
            } else {
                return x
            }
        })

        fetch(`${location.origin}/users/${user_id}`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                Locations: locations
            })
        })
            .then(function (response) {
                // The API call was successful!
                return response.json();
            }).then(function (data) {
            // This is the JSON from our response
            console.log(data.data.data);
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });


    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
});
ArchMark.addEventListener("markerLost", (e) => {
    console.log("marker Lost Arch");
});