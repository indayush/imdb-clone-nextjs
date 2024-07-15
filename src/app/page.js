import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.BACKEND_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  // const res = await new Promise((resolve) => {
  //   setTimeout(async () => {
  //     const response = await fetch(
  //       `https://api.themoviedb.org/3${
  //         genre === "fetchTopRated"
  //           ? "/movie/top_rated"
  //           : "/movie/trending/all/week"
  //       }?api_key=${API_KEY}&language=en-US`,
  //       { next: { revalidate: 10 } }
  //     );
  //     resolve(response);
  //   }, 3000);
  // });

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = data.results;
  // console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
