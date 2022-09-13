import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/Layout';
import { BlogAndCasesDocument, BlogAndCasesQueryResult } from '../generated';
import { client } from '../graphql/apollo';
import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: BlogAndCasesDocument,
  });

  return {
    props: {
      data,
    },
    // revalidate: 5,
  };
};

const Home: NextPage<BlogAndCasesQueryResult> = ({ data }) => {
  const length = data?.blogs.length;
  return (
    <Layout title="トップページです" content="">
      <ul>
        {data?.blogs.map((blog, index) => (
          <Link key={index} href={`/blogs/${blog.slug}`}>
            <a>
              <li>{blog.title}</li>
              <time>{format(new Date(blog.date), 'yyyy.MM.dd')}</time>
            </a>
          </Link>
        ))}
      </ul>
      {length === 4 && (
        <Link href={`/blogs`}>
          <a>View All</a>
        </Link>
      )}

      <div>
        <h3>Case Studies</h3>
        {data?.caseStudies.map((caseStudy, index) => (
          <div key={index}>
            <Link href={`/cases/${caseStudy.slug}`}>
              <a href="">
                <Image
                  src={caseStudy.coverPhoto.url}
                  width={300}
                  height={300}
                  alt={caseStudy.title}
                />
              </a>
            </Link>
            <div>{caseStudy.title}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
