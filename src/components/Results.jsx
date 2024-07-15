import React from "react";
import Card from "./Card";

export default function Results({ results }) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-8">
      {results.map((result) => (
        // <div key={result.id}>
        //   <h2>{result.original_title}</h2>
        // </div>
        <Card key={result.id} result={result}>
          Card
        </Card>
      ))}
    </div>
  );
}
