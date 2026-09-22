import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/room-additions")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/home-additions",
      statusCode: 301,
    });
  },
});
