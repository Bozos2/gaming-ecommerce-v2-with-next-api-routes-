import React from "react";
import { Spinner } from "@nextui-org/react";

export default function loading() {
  return (
    <div className="h-screen flex  justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <Spinner size="lg" />
        <h1 className="text-4xl font-semibold">Učitavanje...</h1>
      </div>
    </div>
  );
}
