import Marquee from "@/components/magicui/marquee";

const reviews = [
  { name: "Creative & Innovative" },
  { name: "Online Conference" },
  { name: "Nextgen Conference Experience" },
  { name: "Office Automation Solution" },
];

const ReviewCard = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-3 px-6">
      {/* Yellow dot separator */}
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <span className="text-white text-sm font-semibold whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

const MarqueeUi = () => {
  return (
    <div className=" bg-black">
      <div className="relative w-full overflow-hidden bg-purple-700 py-2">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeUi;
