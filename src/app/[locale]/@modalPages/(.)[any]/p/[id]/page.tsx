"use client";

import LinkButton from "@/app/components/LinkButton";
import ModalPage from "@/app/components/ModalPage";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function ModalPageA() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <ModalPage>
      <h1>{t("Welcome")} Page any</h1>
      <LinkButton onClick={() => router.back()}>Back home</LinkButton>
    </ModalPage>
  );
}
