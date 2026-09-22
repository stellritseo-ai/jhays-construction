import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/driveways")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/driveway-paving",
      statusCode: 301,
    });
  },
});
