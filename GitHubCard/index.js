import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
// */
// build the function to make a card.
function componentBuilder({ avatar_url, name, login, location, url, followers, following, bio  }){
// create elements to store all info
  const builtCard = document.createElement('div');
  const userImage = document.createElement('img');
  const cardContent = document.createElement('div');
  const displayName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const profileLink = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

// build page structure according to the provided specs
  builtCard.appendChild(userImage);
  builtCard.appendChild(cardContent);
  cardContent.appendChild(displayName);
  cardContent.appendChild(userName);
  cardContent.appendChild(userLocation);
  cardContent.appendChild(userProfile);
  userProfile.appendChild(profileLink);
  cardContent.appendChild(userFollowers);
  cardContent.appendChild(userFollowing);
  cardContent.appendChild(userBio);

// pass data into the created elements, and give them classes.
  builtCard.classList.add('card');
  cardContent.classList.add('card-info');
  userName.classList.add('username');
  userImage.src = avatar_url;
  displayName.textContent = name;
  userName.textContent = login;
  userLocation.textContent = location;
  profileLink.href = url;
  profileLink.textContent = url;
  userFollowers.textContent = followers;
  userFollowing.textContent = following;
  userBio.textContent = bio;

  // return the data passed in to the componentBuilder function
   return builtCard;
}; // This is where the component ends!!

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
  axios.get('https://api.github.com/users/jimjamesjimathy')
  .then(res => {
    const appendToMe = document.querySelector('.cards');
    const dataObj = componentBuilder(res.data);
    appendToMe.appendChild(dataObj);
  })
  .catch(err => {
    console.log(err);
  })
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach(elem => {
  axios.get(`https://api.github.com/users/${elem}`)
  .then(res => {
    const appendToMe = document.querySelector('.cards');
    appendToMe.appendChild(componentBuilder(res.data))
  })
  .catch(err => {
    console.log(err);
  })
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
