import Head from "next/head";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/events-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find coding events of your likes" />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}
