import Content from "../mainContent/Content";

export default function HomeContent() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <p className="mt-1">
        Explore the latest popular movies and TV shows on 123Movies, offering a
        trendy selection for your entertainment needs.
      </p>
      <hr className="my-4 border dark:border-slate-300" />
      <section>
        <h2 className="text-xl font-bold">Popular Movies</h2>
        <hr className="my-4 border dark:border-slate-300" />
        <Content />
      </section>
    </div>
  );
}
