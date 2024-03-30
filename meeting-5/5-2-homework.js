console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password, callback, errorCallback) {
    if (usersDB[email]) { 
      setTimeout(() => {
      console.log("Now we have the data of user:", email);
      callback({ userEmail: email });
    }, 3000);
  } else {
    setTimeout(() => {
        displayError("User not found!");
      }, 3000);  
  }
}
  
function getUserVideos(email, callback, errorCallback) {
    if (usersDB[email].length) {setTimeout(() => {
        callback(usersDB[email]);
      }, 2000);  
} else {
    setTimeout(() => {
        displayError("Videos not found!");
      }, 3000);     
}
}

function videoDetails(video, callback) {
    if (video.title) {
    setTimeout(() => {
        callback(video.title);
      }, 2000);  
    } else {
        setTimeout(() => {
            displayError("Video Title not found!");
          }, 3000);         
    }
}

const getPassedUsersFirstVideoTitle = (user) => {
    loginUser(user, 1234, (result) => {
        if (userEmail = true) {
        console.log("user", result);
        } else {
            displayError(errorMessage);
        }
        getUserVideos(result.userEmail, (videos) => {
            if (userEmail = true) {
            console.log("videos", videos);
            }else {
                displayError(errorMessage);
            }
            videoDetails(videos[0], (title) => {
              if (userEmail = true) {
              console.log("title", title);
              } else {
                displayError(errorMessage);
              }
            })
        })
    })

}

getPassedUsersFirstVideoTitle("user4@hw.js");

console.log("Finish");
