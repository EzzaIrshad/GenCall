"use client";

import { useTRPC } from "@/app/trpc/client";
import { useQuery } from "@tanstack/react-query";


export default function HomeView() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Ezza"}));

    return (
     <div className="flex flex-col p-4">
      {data?.greeting}
     </div>
    )
}
