import { Button } from "@/components/@mui/material";

export default function NestedServer() {
  console.log("Nested server component rendering");
  return (
    <div>
      <h3>Nested Server</h3>
      <p>Nested server content</p>
      <Button>MUI button 2</Button>
    </div>
  );
}
