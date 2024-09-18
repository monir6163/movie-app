import { movies } from "@/lib/movie";
import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {movies.map((movie, i) => (
          <>
            <Link
              href={`/movies/${movie.id}`}
              key={i}
              className="cursor-pointer hover:shadow-lg hover:text-green-500"
            >
              <div className="dark:bg-[#171615 ] rounded overflow-hidden">
                <Image
                  src="https://via.placeholder.com/150"
                  alt="Movie Poster"
                  width={150}
                  height={225}
                  className="w-full h-64 object-cover hover:border-2 border-green-500"
                />
                <div className="p-1">
                  <h3 className="text-lg">
                    {movie.title.length > 20
                      ? `${movie.title.slice(0, 20)}...`
                      : movie.title}
                  </h3>
                  <div className="flex justify-between">
                    <p className="text-sm">{movie.year}</p>
                    <p className="text-sm">
                      {movie.genres.map((genre, i) => (
                        <span key={i} className="mr-1">
                          {genre[0]}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
