 import { axios } from "axios";
 
 const movieBaseUrl = "https://api.themoviedb.org/3"
 const api_key = "8044f6df55ff3f6387876e7378d38547"

//  https://api.themoviedb.org/3/trending/all/day?api_key=YOUR_API_KEY

 const getTrendingVideos = axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key);
