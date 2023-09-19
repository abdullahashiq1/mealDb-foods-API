const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

/*
const sliceCharacters = (text, maxLength) =>{
    if(text.length > maxLength){
        return text.slice(0, maxLength) + '...';
    }
    return text;
}
*/

const displayMeals = (foods) =>{
    // console.log(foods)
    const mealDiv = document.getElementById('meal-container');
    mealDiv.innerText = '';
    foods.forEach(food =>{
        // console.log(food);
        const div = document.createElement('div');
        div.classList.add('col');
        // sliceCharacters 
        // const sliceCharacters = sliceCharacters(food.strInstructions, 100)
        // const sliceChr = food.strInstructions.length > 100 ? `${food.strInstructions.substring(0, 100)}...` : food.strInstructions;
        const sliceChr = food.strInstructions.length > 200 ? `${food.strInstructions.substring(0, 200)}...` : food.strInstructions;

        div.innerHTML = `
            <div class="card h-100">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${sliceChr}</p>
                    <button onclick="loadMealId2(${food.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                        Details
                    </button>
                </div>
            </div>
        `
        mealDiv.appendChild(div)

    })
}

const searchMeals = () =>{
    const search = document.getElementById('search-field').value;
    // console.log(search);
    loadMeals(search);
}

const loadMealId = (mealId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error => {
        console.log(error)

    })
}

const loadMealId2 = async mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    try {
        const res = await fetch(url)
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch(error){
        console.log(error)
    }

}

const displayMealDetails = meal =>{
    console.log(meal)
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}">
        <p>${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}</p>
    `

}

loadMeals('fish')