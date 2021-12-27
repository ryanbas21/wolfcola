import Head from "next/head";
import { INLINES, MARKS } from '@contentful/rich-text-types';
import { useRouter } from "next/router";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import className from "../index.module.css";
import { getAllPostsForHome, getSinglePost } from "../../lib/api";
import Code from "../../components/Code";

export async function getStaticProps({ params: { id }}) {
  const { post } = await getSinglePost(false, id);

  return { 
    props: {
        post
      }
    }
}

export async function getStaticPaths(id) {
    const posts = await getAllPostsForHome(false);

    const paths = posts.map((post) => ({
        params: {
            postId: post.sys.id,
            id: post.sys.id
        }
    })
    );
    return {
        paths,
        fallback: true
    }
}
const options = {
  renderMark: {
    [MARKS.CODE]: (node) => {
			return <Code language={'javascript'} code={node}/>
		}
  },
  renderNode: {
		[INLINES.HYPERLINK]: (node, next) => {
			return `<a href="${node.data.uri}">${next(node.content)}</a>`;
		},
		[INLINES.ENTRY_HYPERLINK]: (node) => {
			return `<a href=''>${node.content}</a>`;
		},
  },
}
export default function Post({post, relatedPosts}){

    const router = useRouter();

    return (
        <div className={className.container}>
            <Head>
            <title>{"Ryan's Blog"}</title>
            <meta name="description" content="random posts I write on the web" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

        <main className={className.main}>
        {
            router.isFallback ? (
                <div className={className.title}>
                    Loading
                </div>
            ): (
            <>
            <div className={className.content}>

            <h2 className={className.title}>
                {post.title}
            </h2>
            <div className={className.contentBody}>
              {documentToReactComponents(post.text.json, options)}
            </div>

            </div>
            
            <div className={className.grid}>
            </div>
            </>
            )
        }

            
        </main>
      </div>
    )
}
