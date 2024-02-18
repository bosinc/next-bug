"use client";

import { Modal, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

export default function ModalPage({ children }: PropsWithChildren) {
  return (
    <Modal open>
      <Stack
        sx={{ alignItems: "center", justifyContent: "center", height: "100%" }}
      >
        <h1>Modal page</h1>
        {children}
      </Stack>
    </Modal>
  );
}
