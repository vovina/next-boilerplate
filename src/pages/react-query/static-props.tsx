import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { PostList } from "ui";

import { fetchPosts } from "lib/features";

const Home = () => (
  <>
    <p>This page shows how to use SSG with React-Query.</p>
    <PostList />
  </>
);

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 10], () => fetchPosts(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
