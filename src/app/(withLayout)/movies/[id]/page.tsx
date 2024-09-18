"use client";
import Breadcrumb from "@/components/Breadcrumb";
import MovieDetails from "@/components/movieDetails/MovieDetails";
import { movies } from "@/lib/movie";
import { useParams } from "next/navigation";

export default function MoviesDetails() {
  const { id } = useParams();
  const movieData = movies.find((movie) => movie.id === parseInt(id as string));
  return (
    <>
      <Breadcrumb />
      <MovieDetails movieData={movieData} />
    </>
  );
}
