import Image from "next/image";
import logo2 from "../../../../public/assest/logoImage/logo shape (1).png";
import logo3 from "../../../../public/assest/logoImage/logo shape (2).png";
import logo4 from "../../../../public/assest/logoImage/logo shape (3).png";
import logo1 from "../../../../public/assest/logoImage/logo shape.png";

const brands = [
  { id: 1, name: "Micro Software", logo: logo1 },
  { id: 2, name: "Globe Event Planner", logo: logo2 },
  { id: 3, name: "Luxe Diamond", logo: logo3 },
  { id: 4, name: "Prestige Platinum", logo: logo4 },
];

export default function BrandGrid() {
  return (
    <section className="bg-black py-10 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 justify-items-center">
        {brands.map((brand) => (
          <div key={brand.id} className="flex items-center gap-2 text-gray-300">
            <div className="w-10 h-10 relative">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
