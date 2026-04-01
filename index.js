async function fetchAPi (x){
    const url = `http://www.omdbapi.com/?s=${x}&apikey=48aa168d`
    try{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    }
    catch(e){console.log(e)}
}
const character = "batman"
fetchAPi(character)
