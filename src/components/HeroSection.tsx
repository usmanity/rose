import about from "../../content/about.json";

export function HeroSection() {
  return (
    <div className="my-12 grid grid-cols-2 gap-4 ">
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold">{about.hero.heading}</h1>
        <p className="mt-2 leading-tight">{about.hero.description}</p>
      </div>
      <div className="col-span-1">
        <img src={about.hero.photo} className="rounded-md" />
      </div>
    </div>
  );
}
