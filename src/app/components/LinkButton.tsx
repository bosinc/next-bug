import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";

export default function LinkButton(props: ButtonProps) {
  return <Button LinkComponent={Link} {...props} />;
}
