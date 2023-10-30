
export const storeToken=(token)=>{

    localStorage.setItem('token',token)
    console.log('token stored')
}

export const getToken=()=>localStorage.getItem('token');