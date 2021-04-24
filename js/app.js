import data from '../Data/userData.js';

// JSON.stringify(data)


sortUserByFavourites();
console.log(data);

function findUserByName(name) 
{
    for(let user of data) 
    {
        if(user.name == name) return 1;
    }

    return null;
};

function countUserFromCountry(country) {
    let cnt = 0;
    for(let user of data) if(user.country == country) cnt++;

    return cnt;
};

function findUserByGenderAndFavourite(gender, favourite) {
    for(let user of data) if(user.gender == gender && checkfavourite(user.favourites, favourite) == 1) return 1;
    
    return null;
};

function checkfavourite(favourites, favourite) {
    for(let fav of favourites) if(favourite == fav) return 1;
    return null;
};

function sortUserByFavourites() {
    for(let i = 0; i < data.length; i++) {
        for(let j = data.length - 1; j > i; j--)
        {
            if(data[j].favorites.length < data[j + 1].favorites)
            {
                let temp = data[j];
                data[j] = data[j-1];
                data[j-1] = temp;
            }
        }
    }
};

