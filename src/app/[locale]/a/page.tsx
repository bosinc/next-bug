"use client";
import { useTranslations } from "next-intl";
import LinkButton from "../../components/LinkButton";

import { useRouter } from "next/navigation";

export default function PageA() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div>
      <h1>{t("Welcome")} Page a</h1>
      <LinkButton onClick={() => router.back()}>Back home</LinkButton>
    </div>
  );
}
