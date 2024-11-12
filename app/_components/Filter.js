"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { filterConstants } from "@/app/_utils/constants";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {filterConstants?.map((item) => (
        <Button
          filter={item.name}
          handleFilter={handleFilter}
          currentFilter={activeFilter}
          key={item.id}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
}

function Button({ filter, handleFilter, currentFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        currentFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
