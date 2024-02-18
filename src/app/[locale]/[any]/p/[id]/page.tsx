"use client";
import { useRouter } from "next/navigation";
import LinkButton from "@/app/components/LinkButton";
import { useTranslations } from "next-intl";

// @ts-ignore
export default function PageAny({ params }) {
  const t = useTranslations();
  const router = useRouter();
  return (
    <div>
      <h1>
        {t("Welcome")} Page {params["any"]}
      </h1>
      <LinkButton onClick={() => router.back()}>Back home</LinkButton>
    </div>
  );
}
