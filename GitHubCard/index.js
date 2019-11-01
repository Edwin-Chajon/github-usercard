/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/edwin-chajon')
  .then(response =>{
    console.log(response.data)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards')

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

axios.get('https://api.github.com/users/bigknell')
  .then(response =>{
      newCard(response.data)
  })

  
const followersArray = (['https://api.github.com/users/bigknell'],
                        ['https://api.github.com/users/tetondan'],
                        ['https://api.github.com/users/dustinmyers'],
                        ['https://api.github.com/users/justsml'],
                        ['https://api.github.com/users/luishrd']);
                        
followersArray.forEach(item=>{
axios.get(item)
.then(response =>{
newCard(response.data)
})
})
                        
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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




function newCard(newData){
  const card = document.createElement('div')
  const image = document.createElement('img')
  const innerDiv = document.createElement('div')
  const name  = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.className = 'card';
  innerDiv.className = 'card-info';
  name.className = 'name';
  username.className = 'username';

  card.appendChild(image);
  card.appendChild(innerDiv);
  innerDiv.appendChild(name);
  innerDiv.appendChild(username);
  innerDiv.appendChild(location);
  innerDiv.appendChild(profile);
  innerDiv.appendChild(followers);
  innerDiv.appendChild(following);
  innerDiv.appendChild(bio);

  image.src = newData.avatar_url;
  name.textContent = newData.name;
  username.textContent = newData.login;
  location.textContent = `location: ${newData.location}`;
  profile.innerHTML = `profile: <a href=${newData.html_url}>${newData.html_url}</a>`;
  followers.textContent = `followers ${newData.followers}`;
  following.textContent = `following ${newData.following}`;
  bio.textContent = `bio: ${newData.bio}`;

  cards.appendChild(card)
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
