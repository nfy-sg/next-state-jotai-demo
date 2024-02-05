'use client';

import { atom, useSetAtom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils';

export const searchAtom = atom('');
searchAtom.debugLabel = 'searchAtom';

export default function MySearch({ defaultValue }: { defaultValue: string }) {
  const setSearchQuery = useSetAtom(searchAtom);

  useHydrateAtoms([[searchAtom, defaultValue]]);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);

    if (event.target.value === '') {
      window.history.replaceState(null, '', '/');
      return;
    }

    window.history.replaceState(null, '', `?filter=${event.target.value}`);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <input type="text" placeholder="Search" className="p-4 border border-gray-300 rounded-lg min-w-[400px] mb-12" onChange={handleOnChange} defaultValue={defaultValue} />
    </div>
  );
}
