"use client";
import { Button, Stack } from "@mui/material";
import LinkButton from "./components/LinkButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Stack>
      <LinkButton href="/a">Page a</LinkButton>
      <LinkButton onClick={() => router.push(`/any/p/id`)}>Page any</LinkButton>
    </Stack>
  );
}
