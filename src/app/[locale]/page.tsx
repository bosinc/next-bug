"use client";
import { Button, Stack, Typography } from "@mui/material";
import LinkButton from "../components/LinkButton";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <Stack>
      <Typography variant="h4" align="center">
        {t("Welcome")}
      </Typography>
      <LinkButton href="/a">Page a</LinkButton>
      <LinkButton onClick={() => router.push(`/any/p/id`)}>Page any</LinkButton>
    </Stack>
  );
}
