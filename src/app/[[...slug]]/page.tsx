import MyResults from "@/components/MyResults";
import MySearch from "@/components/MySearch";

export default async function Page({ params, searchParams }: { params: { slug?: string }, searchParams: Record<string, string>}) {
  const { slug } = params;
  const { filter } = searchParams;

  const data = await Promise.all([
    fetch(`https://swapi.dev/api/people/`).then((res) => res.json()),
    fetch(`https://swapi.dev/api/people/?page=2`).then((res) => res.json()),
    fetch(`https://swapi.dev/api/films/`).then((res) => res.json())
  ]);

  if (!data) {
    throw new Error('Failed to fetch data');
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <MySearch defaultValue={filter} />
      <MyResults dataset={[...data[0].results, ...data[1].results]} movies={data[2].results} />
    </main>
  );
}
