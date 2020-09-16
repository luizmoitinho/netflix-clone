const API_KEY  = "edd8b0e6eac8a7b77bd5f278e5ad706c";
const API_BASE = "https://api.themoviedb.org/3";
const LANGUAGE = 'pt-BR';

/*
 - Originais da netflix
 - recomendados
 - em alta
*/


const basicFetch = async(endpoint) =>{
  const request = await fetch(`${API_BASE}${endpoint}language=${LANGUAGE}&api_key=${API_KEY}`);
  return  await request.json();
}

export default {
      getHomeList: async() => {
        return [
          {
            slug : "originals",
            title: "Originais da Netflix",
            items: await basicFetch('/discover/tv?with_network=213?')
          },
          {
            slug : "trending",
            title: "Recomendados para você",
            items: await basicFetch('/trending/all/week?')
          },
          {
            slug : "topreated",
            title: "Em Alta",
            items: await basicFetch('/movie/top_rated?')
          },
          {
            slug : "action",
            title: "Ação",
            items: await basicFetch('/discover/movie?with_genres=28&')
          },
          {
            slug : "comedy",
            title: "Comédia",
            items: await basicFetch('/discover/movie?with_genres=35&')
          },
          {
            slug: "horror",
            title:"Terror",
            items: await basicFetch('/discover/movie?with_genres=27&')
          },
          {
            slug: "romance",
            title:"Romance",
            items: await basicFetch('/discover/movie?with_genres=10749&')
          },
          {
            slug: "documentary",
            title:"Documentários",
            items: await basicFetch('/discover/movie?with_genres=99&')          
          }
        ]
      }
}