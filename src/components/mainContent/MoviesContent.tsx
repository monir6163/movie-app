import Content from "./Content";

export default function MoviesContent() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Movies</h1>
      <p className="mt-1">
        Explore the latest popular movies and TV shows on 123Movies, offering a
        trendy selection for your entertainment needs.
      </p>
      <hr className="my-4 border dark:border-slate-300" />
      <section>
        <Content />
      </section>
    </div>
  );
}
