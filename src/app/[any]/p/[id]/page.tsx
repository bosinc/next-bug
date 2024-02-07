"use client";
import { useRouter } from "next/navigation";
import LinkButton from "../../../components/LinkButton";

// @ts-ignore
export default function PageAny({ params }) {
  const router = useRouter();
  return (
    <div>
      <h1>Page {params["any"]}</h1>
      <LinkButton onClick={() => router.back()}>Back home</LinkButton>
    </div>
  );
}
