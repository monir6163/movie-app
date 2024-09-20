"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MovieDetailsProps {
  movieData?: {
    id: number;
    title: string;
    year: number;
    genres: string[];
    link?: string[];
    poster: string;
    type: string;
  };
}

export default function MovieDetails({ movieData }: MovieDetailsProps) {
  const [buttonStates, setButtonStates] = useState(
    new Array(movieData?.link?.length).fill(false)
  );
  const handleButtonClick = (index: number) => {
    const updatedStates = [...buttonStates];
    updatedStates[index] = true;
    setButtonStates(updatedStates);
  };
  const areAllButtonsClicked = buttonStates.every((state) => state);

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
            {/* Watch Now Button */}
            <Button variant="default" disabled={!areAllButtonsClicked}>
              Watch Now
            </Button>

            {/* Buttons for each link */}
            <div className="flex flex-col md:flex-row gap-5 mb-5">
              {movieData?.link?.map((link, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStates[index] ? "hidden" : ""}
                >
                  <Button
                    className={buttonStates[index] ? "bg-green-500" : ""}
                    onClick={() => handleButtonClick(index)}
                  >
                    Button {index + 1}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
