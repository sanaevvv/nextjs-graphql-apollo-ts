import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  BlogAndCasesDocument,
  GetSingleBlogDocument,
  GetSingleBlogQueryResult,
} from '../../generated';
import { client } from '../../graphql/apollo';

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: BlogAndCasesDocument,
  });
  const paths = data.blogs.map((blog: any) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const { data } = await client.query({
    query: GetSingleBlogDocument,
    variables: { slug },
  });

  return {
    props: {
      data,
    },
    revalidate: 5,
  };
};

const MyBlog: NextPage<GetSingleBlogQueryResult> = ({ data }) => {
  if (!data) <h1>投稿がありません。</h1>

  return (
    <>
      <h1>My Blog detail</h1>
      <div>{data?.blogs[0].title}</div>
    </>
  );
};

export default MyBlog;
