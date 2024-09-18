import { Button } from "@/components/ui/button";
import Image from "next/image";

interface MovieDetailsProps {
  movieData?: {
    id: number;
    title: string;
    year: number;
    genres: string[];
    poster: string;
    type: string;
  };
}

export default function MovieDetails({ movieData }: MovieDetailsProps) {
  if (!movieData) return null;
  return (
    <div className="mt-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-1/3">
          <Image
            src={movieData.poster}
            alt={movieData.title}
            width={300}
            height={400}
            className="rounded w-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {movieData.title} ({movieData.year})
          </h1>
          <p className="mt-3 mb-3 text-green-500">
            {movieData.genres.join(" . ")}
          </p>
          <p className="text-justify">
            Madaket Beach. The Otis-Winbury wedding promises to be an event to
            remember: the grooms wealthy parents have spared no expense to host
            a lavish ceremony at their oceanfront estate. But it will be
            memorable for all the wrong reasons after tragedy strikes: a body is
            discovered in Nantucket Harbor just hours before the ceremony--and
            everyone in the wedding party is suddenly a suspect. As Chief of
            Police Ed Kapenash interviews the bride, the groom, the grooms
            famous mystery-novelist mother, and even a member of his own family,
            he discovers that every wedding is a minefield--and no couple is
            perfect.
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-5">
            <Button variant="default" disabled>
              Watch Now
            </Button>

            <div className="flex flex-col md:flex-row gap-5 mb-5">
              <Button variant="default">Button 1</Button>
              <Button variant="default">Button 2</Button>
              <Button variant="default">Button 3</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
