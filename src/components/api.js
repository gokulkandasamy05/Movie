const apiConfig = {
    apiKey:'0b354d56418abb89297efb879d0b9a59',
    trending:'https://api.themoviedb.org/3/trending/movie/day?api_key=',
    geners:'https://api.themoviedb.org/3/genre/movie/list?api_key=',
    images:'https://image.tmdb.org/t/p/original',
    image500:'https://image.tmdb.org/t/p/w500/',
    image300:'https://image.tmdb.org/t/p/w300/',
    image154:`https://image.tmdb.org/t/p/w154/`,
    image780:'https://image.tmdb.org/t/p/w780/',
    videos:'https://api.themoviedb.org/3/movie/',
    yVideos:'https://www.youtube.com/embed/',
    genre:'https://api.themoviedb.org/3/genre/movie/list?api_key=',
    
}
// https://api.themoviedb.org/3/movie/777831/videos?api_key=0b354d56418abb89297efb879d0b9a59&language=en-US






const home={
    popular:'https://api.themoviedb.org/3/movie/popular?api_key=',
    upcoming:'https://api.themoviedb.org/3/movie/upcoming?api_key=',
    topRated:'https://api.themoviedb.org/3/movie/top_rated?api_key=',
    latest:'https://api.themoviedb.org/3/movie/latest?api_key=',
    nowPlaying:'https://api.themoviedb.org/3/movie/now_playing?api_key=',
    trending:'https://api.themoviedb.org/3/trending/movie/day?api_key=',
}



const similar={
    getSimilar:'https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=',
}

const credit = {
    getCredit(id,apiKey){
        return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    },

    getMember(credit_id,apiKey){
        return `https://api.themoviedb.org/3/credit/${credit_id}?api_key=${apiKey}`
    }
}


const tamil ={
    getTamilTrending:`https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&primary_release_year=2022&with_original_language=`
}

export {apiConfig,home,similar,tamil, credit};




// 20220430092320
// https://api.themoviedb.org/3/genre/movie/list?api_key=0b354d56418abb89297efb879d0b9a59&language=en-US


