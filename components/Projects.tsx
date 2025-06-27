import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  const project__cards = [
    {
      projectLink: ExternalLink,
    },
  ];
  return (
    <section className="h-screen flex items-center justify-center relative px-5 max-w-7xl mx-auto">
      <h3 className="absolute top-28 md:top-32 uppercase font-medium tracking-[10px] text-lg md:text-xl lg:text-2xl text-gray-400">
        Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Link
          href="https://nutritionist-website.pages.dev/"
          className="rounded-xl border border-white/10 overflow-hidden group relative"
          target="_blank"
        >
          <div className="h-60">
            <Image
              src="/images/project-1.png"
              alt="Nutritionist"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-xl text-center py-5">Nutritionist Project</h3>

          <div className="hidden group-hover:block absolute bg-black/50 z-50 inset-0">
            <ExternalLink className="w-full h-full p-32" />
          </div>
        </Link>

        <Link
          href="https://starbuck-clone.pages.dev/"
          className="rounded-xl border border-white/10 overflow-hidden group relative"
          target="_blank"
        >
          <div className="h-60">
            <Image
              src="/images/project-2.png"
              alt="Nutritionist"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-xl text-center py-5">Starbuck Clone Project</h3>

          <div className="hidden group-hover:block absolute bg-black/50 z-50 inset-0">
            <ExternalLink className="w-full h-full p-32" />
          </div>
        </Link>

        <Link
          href="https://food-taste.pages.dev/"
          className="rounded-xl border border-white/10 overflow-hidden group relative"
          target="_blank"
        >
          <div className="h-60">
            <Image
              src="/images/project-3.png"
              alt="Nutritionist"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-xl text-center py-5">Food Taste Project</h3>

          <div className="hidden group-hover:block absolute bg-black/50 z-50 inset-0">
            <ExternalLink className="w-full h-full p-32" />
          </div>
        </Link>

        <Link
          href="https://furniture-website.pages.dev/"
          className="rounded-xl border border-white/10 overflow-hidden group relative"
          target="_blank"
        >
          <div className="h-60">
            <Image
              src="/images/project-4.png"
              alt="Nutritionist"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-xl text-center py-5">Furniture Project</h3>

          <div className="hidden group-hover:block absolute bg-black/50 z-50 inset-0">
            <ExternalLink className="w-full h-full p-32" />
          </div>
        </Link>

        <Link
          href="https://food-website-xi.vercel.app/"
          className="rounded-xl border border-white/10 overflow-hidden group relative"
          target="_blank"
        >
          <div className="h-60 w-full">
            <Image
              src="/images/project-5.png"
              alt="Nutritionist"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-xl text-center py-5">Food Website Project</h3>

          <div className="hidden group-hover:block absolute bg-black/50 z-50 inset-0">
            <ExternalLink className="w-full h-full p-32" />
          </div>
        </Link>

        <Link
          href="https://home-sale.vercel.app/"
          className="rounded-xl border border-white/10 overflow-hidden group relative"
          target="_blank"
        >
          <div className="h-60 w-full">
            <Image
              src="/images/project-6.png"
              alt="Nutritionist"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-xl text-center py-5">Just Rent Project</h3>

          <div className="hidden group-hover:block absolute bg-black/50 z-50 inset-0">
            <ExternalLink className="w-full h-full p-32" />
          </div>
        </Link>

        <Link
          href="https://blog-preview-card-aea.pages.dev/"
          className="rounded-xl border border-white/10 overflow-hidden group relative"
          target="_blank"
        >
          <div className="h-60 w-full">
            <Image
              src="/images/project-7.png"
              alt="Nutritionist"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h3 className="text-xl text-center py-5">
            HTML & CSS Foundations Project
          </h3>

          <div className="hidden group-hover:block absolute bg-black/50 z-50 inset-0">
            <ExternalLink className="w-full h-full p-32" />
          </div>
        </Link>
      </div>
    </section>
  );
}
export default Projects;
