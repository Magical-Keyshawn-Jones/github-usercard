import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const awesomeData = [];

axios.get('https://api.github.com/users/Magical-Keyshawn-Jones')
.then(object => awesomeData.push(object.data))
.catch(err => console.log('error!', err));

console.log(awesomeData);
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];


  // STEP 3: Create a function that accepts a single object as its only argument.
  //   Using DOM methods and properties, create and return the following markup:

  const gitCardMaker = objectThing => {

    // DOM Holders
    const divCard = document.createElement('div');
    const divInfo = document.createElement('div');
    const imgUrl = document.createElement('img');
    const h3Name = document.createElement('h3');
    const pUserName = document.createElement('p');
    const pLocation = document.createElement('p');
    const pProfile = document.createElement('p');
    const pFollowers = document.createElement('p');
    const pFollowing = document.createElement('p');
    const pBio = document.createElement('p');
    const githubUrl = document.createElement('a');

    // Giving DivCard kids
    divCard.appendChild(imgUrl);
    divCard.appendChild(divInfo);

    // Giving DivInfo kids
    divInfo.appendChild(h3Name);
    divInfo.appendChild(pUserName);
    divInfo.appendChild(pLocation);
    divInfo.appendChild(pProfile);
    divInfo.appendChild(pFollowers);
    divInfo.appendChild(pFollowing);
    divInfo.appendChild(pBio);
    
    //  Giving pProfile a child
    pProfile.appendChild(githubUrl);

    // Adding Div Mods
    divCard.classList.add('card');
    divInfo.classList.add('card-info');

    // Adding img mods
    imgUrl.src = objectThing[0].avatar.url;

    // Adding H3 Mods
    h3Name.classList.add('name');
    h3Name.textContent = objectThing[0].name;

    // Adding githubUrl Mods
    githubUrl.href = objectThing[0].html_url;
    githubUrl.textContent = objectThing[0].html_url;

    // Adding P mods
    pUserName.classList.add('username');
    pUserName.textContent = objectThing[0].login;

    pLocation.textContent = objectThing[0].location;

    pProfile.textContent = githubUrl;

    pFollowers.textContent = objectThing[0].followers;
    pFollowing.textContent = objectThing[0].following;

    pBio.textContent = objectThing[0].bio;

    // Returning the component 
    return divCard;
  };

  //   <div class="card">
  //     <img src={image url of user} />
  //     <div class="card-info">
  //       <h3 class="name">{users name}</h3>
  //       <p class="username">{users user name}</p>
  //       <p>Location: {users location}</p>
  //       <p>Profile:
  //         <a href={address to users github page}>{address to users github page}</a>
  //       </p>
  //       <p>Followers: {users followers count}</p>
  //       <p>Following: {users following count}</p>
  //       <p>Bio: {users bio}</p>
  //     </div>
  //   </div>


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
