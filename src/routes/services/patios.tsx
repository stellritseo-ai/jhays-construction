import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/patios")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/patio-installation",
      statusCode: 301,
    });
  },
});
