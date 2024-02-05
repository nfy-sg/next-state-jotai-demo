"use client";

import { useAtomValue } from "jotai";
import { searchAtom } from "./MySearch";
import PeopleResults from "./PeopleResults";
import MovieResults from "./MovieResults";

interface IMyResults {
  dataset: any[];
  movies: any[];
}

export default function MyResults({ dataset, movies }: IMyResults) {
  const peopleSearchQuery = useAtomValue<string>(searchAtom);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Results</h1>
      <p className="text-lg">
        {peopleSearchQuery ? (
          <>You searched for &quot;{peopleSearchQuery}&quot;</>
        ) : (
          <>These are the results</>
        )}
      </p>

      <PeopleResults dataset={dataset} />
      <MovieResults movies={movies} />
    </div>
  );
}
