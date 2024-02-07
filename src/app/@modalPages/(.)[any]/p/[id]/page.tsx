"use client";

import LinkButton from "@/app/components/LinkButton";
import ModalPage from "@/app/components/ModalPage";
import { useRouter } from "next/navigation";

export default function ModalPageA() {
  const router = useRouter();
  return (
    <ModalPage>
      <h1>Page any</h1>
      <LinkButton onClick={() => router.back()}>Back home</LinkButton>
    </ModalPage>
  );
}
