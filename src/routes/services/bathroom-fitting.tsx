import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/bathroom-fitting")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/bathroom-remodeling",
      statusCode: 301,
    });
  },
});
