import CabinCard from "@/app/_components/CabinCard.js";
import { getCabins } from "@/app/_lib/data-service";
import { filterCabins } from "@/app/_utils/utils";
// import { unstable_noStore as noStore } from "next/cache";

export default async function CabinList({ filter }) {
  // Dynamic rendering at component level
  // Immediate effect opting out data cache
  // Manual re-validation disabling cache
  // noStore();
  const cabins = await getCabins();
  if (!cabins.length) return null;

  const displayedCabins = filterCabins(filter, cabins);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
