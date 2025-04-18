import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
const reviews = [
  {
    name: "Online Conference",
  },
  {
    name: " Nextgen Conference Experience",
  },
  {
    name: "Innovative and Creativity",
  },
  {
    name: "O ce Automation Solution",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ name }: { name: string }) => {
  return (
    <div>
      <figure className={cn("relative  cursor-pointer overflow-hidden p-4")}>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col text-white">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
          </div>
        </div>
      </figure>
    </div>
  );
};

const MarqueeUi = () => {
  return (
    <div className=" grid  items-center justify-items-center  pt-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className=" relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s] bg-blue-900">
          {firstRow.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeUi;
