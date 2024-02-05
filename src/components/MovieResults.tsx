"use client";

import { atom, useAtomValue } from "jotai";
import { searchAtom } from "./MySearch";
import { useHydrateAtoms } from "jotai/utils";
import { filteredPeopleAtom } from "./PeopleResults";

const moviesAtom = atom<any[]>([]);
moviesAtom.debugLabel = "moviesAtom";

const filteredMoviesAtom = atom((get) => {
  const peopleIds = get(filteredPeopleAtom).map((person: any) => person.url);
  return get(moviesAtom).filter((movie: any) => {
    return (movie.characters as Array<any>).some((char) => {
      return peopleIds.includes(char);
    });
  });
});
filteredMoviesAtom.debugLabel = "filteredMoviesAtom";

export default function MovieResults({ movies }: { movies: any[] }) {
  useHydrateAtoms([[moviesAtom, movies]]);

  const moviesPeopleAreIn = useAtomValue(filteredMoviesAtom);

  return (
    <>
      <h2 className="text-2xl font-bold mt-12">
        Movies the characters above are present in
      </h2>
      <ul>
        {moviesPeopleAreIn.map((movie: any) => (
          <li key={movie.title} className="mb-4">
            <p className="text-lg font-bold">{movie.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
