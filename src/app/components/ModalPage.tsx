"use client";

import { Modal } from "@mui/material";
import { PropsWithChildren } from "react";

export default function ModalPage({ children }: PropsWithChildren) {
  return (
    <Modal
      open
      // style={{
      //   position: "absolute",
      //   width: "dwh",
      //   height: "dvh",
      // }}
    >
      <>
        <h1>Modal page</h1>
        {children}
      </>
    </Modal>
  );
}
