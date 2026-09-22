import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/kitchen-fitting")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/kitchen-remodeling",
      statusCode: 301,
    });
  },
});
