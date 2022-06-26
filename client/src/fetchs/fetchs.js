
//const URL_BASE = 'https://flappy-bird-sinatra-0.herokuapp.com/'

//GET -----------------------------------------------------
//get user scores
export const autoLogin = () => {
    let infoPack =  fetch(`/autologin`)
    .then(( res => res))
    .catch(() => false)

    return infoPack
}

export const getUserScores = () => {
    let infoPack =  fetch(`/users/scores`)
    .then(res => res)
    .catch(() =>false)

    return infoPack
}
export const getBestScores = () => {
    let infoPack =  fetch(`/scores`)
    .then(res => res)
    .catch(() =>false)

    return infoPack
}

//POST ----------------------------------------------
//post response login
export const postLoginResponse = (body) => {
    let infoPack = fetch(`/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res => res)
    .catch(error => false)

    return infoPack
}
//post register new user
export const postCreateNewUser = (body) => {
    return fetch(`/users`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
    })
    .then(res => res)
    .catch(()=>false)
}
//post new score
export const postNewScore = (score) => {
    return fetch(`/scores`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({score: score})
        })
        .then(res=>res.json())
        .then(data => data)
        .catch(()=>false)
}

//PATCH -------------------------------------------
//patch username
export const patchUserName = (newUserName) => {
    
    return fetch(`/users`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: newUserName})
    })
    .then(()=>true)
    .catch(()=>false)
}
//DELETE ---------------------------------------------
//delete user
export const deleteUser = () => {
    return fetch(`/users`,{
        method:'DELETE',
    })
    .then(()=>true)
    .catch(()=>false)
}

export const logOutServer = () => {
    return fetch(`/logout`,{
        method:'DELETE',
    })
    .then(res => res)
    .catch(()=>false)
}