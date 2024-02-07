"use client";
import LinkButton from "../components/LinkButton";

import { useRouter } from "next/navigation";

export default function PageA() {
  const router = useRouter();
  return (
    <div>
      <h1>Page a</h1>
      <LinkButton onClick={() => router.back()}>Back home</LinkButton>
    </div>
  );
}
