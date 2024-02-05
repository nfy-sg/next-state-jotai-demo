"use client";

import { atom, useAtomValue } from "jotai";
import { searchAtom } from "./MySearch";
import { useHydrateAtoms } from "jotai/utils";

export const peopleAtom = atom<any[]>([]);
peopleAtom.debugLabel = "peopleAtom";

export const filteredPeopleAtom = atom((get) => get(peopleAtom).filter((item: any) => {
  if (!get(searchAtom)) {
    return true;
  }
  return item?.name?.toLowerCase()?.includes(get(searchAtom)?.toLowerCase());
}));
filteredPeopleAtom.debugLabel = "filteredPeopleAtom";

export default function PeopleResults({ dataset }: { dataset: any[] }) {
  useHydrateAtoms([[peopleAtom, dataset]]);

  const filteredPeople = useAtomValue(filteredPeopleAtom);

  return (
    <>
      <p className="text-lg mt-4">Total results: {filteredPeople.length}</p>

      <ul className="mt-12">
        {filteredPeople.map((person: any) => (
          <li key={person.name} className="mb-4">
            <p className="text-lg font-bold">{person.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
