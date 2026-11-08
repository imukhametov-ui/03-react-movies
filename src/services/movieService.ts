import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
});

export async function fetchMovies(
  query: string,
  page: number = 1,
): Promise<MoviesResponse> {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data;
}