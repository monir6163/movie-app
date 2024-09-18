"use client";
import Breadcrumb from "@/components/Breadcrumb";
import MovieDetails from "@/components/mainContent/movieDetails/MovieDetails";
import { movies } from "@/lib/movie";
import { useParams } from "next/navigation";

export default function MoviesDetails() {
  const { id } = useParams();
  const movieData = movies.find((movie) => movie.id === parseInt(id as string));
  return (
    <div>
      <Breadcrumb />
      <MovieDetails movieData={movieData} />
    </div>
  );
}
