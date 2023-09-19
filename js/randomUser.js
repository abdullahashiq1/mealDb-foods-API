const loadRandomUser= () =>{
    fetch(`https://randomuser.me/api/?gender=female`)
    .then(res => res.json())
    .then(data => displayRandom(data))
}

const displayRandom= (user) =>{
    console.log(user);

    // userName 
    const userName =`${user.results[0].name.first} ${user.results[0].name.last}`;
    document.getElementById('name').innerHTML = userName
    // location 
    const location = `${user.results[0].location.city}, ${user.results[0].location.country}`;
    document.getElementById('location').innerHTML = location;
    // image
    const profileImg = user.results[0].picture.medium;
    const profilePicEle = document.getElementById('profile-pic');
    profilePicEle.src = profileImg;
    // console.log(user.results[0].picture.medium)
    
}

loadRandomUser()