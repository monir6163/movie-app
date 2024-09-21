"use client";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MovieDetailsProps {
  movieData?: {
    id: number;
    title: string;
    year: number;
    genres: string[];
    link?: string[];
    poster: string;
    type: string;
    movie_d_link?: string;
  };
}

export default function MovieDetails({ movieData }: MovieDetailsProps) {
  const [buttonStates, setButtonStates] = useState(
    new Array(movieData?.link?.length || 3).fill(false)
  );
  const [progress, setProgress] = useState(0); // To track button clicks percentage
  const [countdown, setCountdown] = useState(0); // 30-second countdown timer
  const [startCountdown, setStartCountdown] = useState(false); // To start the countdown only when all buttons are clicked

  const handleButtonClick = (index: number) => {
    const updatedStates = [...buttonStates];
    updatedStates[index] = true;
    setButtonStates(updatedStates);
  };

  // Calculate progress as a percentage based on the number of buttons clicked
  useEffect(() => {
    const clickedButtons = buttonStates.filter((state) => state).length;
    const totalButtons = buttonStates.length;
    setProgress((clickedButtons / totalButtons) * 100);

    // Start countdown when all buttons are clicked
    if (clickedButtons === totalButtons) {
      setStartCountdown(true); // Enable countdown when all buttons are clicked
      setCountdown(10); // Start a 30-second countdown
    }
  }, [buttonStates]);

  // Countdown logic
  useEffect(() => {
    if (startCountdown && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown, startCountdown]);

  if (!movieData) return null;

  return (
    <div className="mt-5">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative w-[200px] self-center">
          <Image
            src={movieData.poster}
            alt={movieData.title}
            width={200}
            height={300}
            className="rounded object-cover"
          />
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center gap-3">
            <AlertDialog>
              {movieData?.movie_d_link ||
                (movieData?.link && (
                  <AlertDialogTrigger>
                    <PlayCircle
                      size={64}
                      className=" animate-pulse text-white"
                    />
                  </AlertDialogTrigger>
                ))}
              <AlertDialogContent
                className=" bg-gray-600 text-white
                dark:bg-gray-800 dark:text-gray-200 text-wrap text-center"
              >
                <AlertDialogHeader>
                  {progress === 100 && countdown === 0 ? (
                    ""
                  ) : (
                    <>
                      <AlertDialogTitle>
                        Complete the following tasks
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Visit all the links to complete the task and download
                        the movie
                      </AlertDialogDescription>
                    </>
                  )}
                </AlertDialogHeader>
                <div className="flex justify-between items-center">
                  {progress >= 100 && (
                    <p>
                      Please Wait:{" "}
                      <span className="font-bold">{countdown}</span> seconds
                    </p>
                  )}
                  {progress > 0 && (
                    <p>
                      Progress:{" "}
                      <span className="font-bold">{progress.toFixed(2)}%</span>
                    </p>
                  )}
                </div>
                {progress === 100 ? (
                  ""
                ) : (
                  <div className="flex flex-col md:flex-row gap-3 mt-5">
                    {movieData.link?.map((link, index) => (
                      <Link
                        href={link}
                        key={index}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={`${
                          buttonStates[index] ? "pointer-events-none" : ""
                        }`}
                      >
                        <Button
                          onClick={() => handleButtonClick(index)}
                          disabled={buttonStates[index]}
                          className="w-full"
                        >
                          Visit Link {index + 1}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
                {progress === 100 && countdown === 0 && (
                  <>
                    <p className="mt-3">
                      You have successfully completed the task. Thank you!
                    </p>
                    {/* download button */}
                    <a
                      href={movieData?.movie_d_link} // Set the download link
                      download
                      target="_blank"
                      className="bg-green-500 text-white px-3 py-2 rounded mt-3"
                    >
                      Download
                    </a>

                    <button
                      onClick={() => window.location.reload()}
                      className="bg-red-500 text-white px-3 py-2 rounded mt-3"
                    >
                      Close
                    </button>
                  </>
                )}
                {progress !== 100 && countdown === 0 && (
                  <>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </>
                )}
              </AlertDialogContent>
            </AlertDialog>
          </div>
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
        </div>
      </div>
    </div>
  );
}
