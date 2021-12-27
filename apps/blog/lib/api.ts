const POST_GRAPHQL_FIELDS = `
    sys {
      id
    }
    title
    subHeader 
    tags
`
async function fetchGraphQL(query, preview = false) {
    const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
            preview
                ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                : process.env.CONTENTFUL_ACCESS_TOKEN
            }`,
        },
        body: JSON.stringify({ query }),
        }
    )
  return response.json();
}

function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.ryanblogCollection?.items
}

async function getAllPostsForHome(preview = false) {
    const entries = await fetchGraphQL(
        `query {
            ryanblogCollection(preview: ${preview ? 'true' : 'false'}, order: subHeader_DESC) {
              items {
                ${POST_GRAPHQL_FIELDS}
              }
          }
        }`,
        preview
    )

    return extractPostEntries(entries)
}

function extractPost(fetchResponse){
    return fetchResponse?.data?.ryanblog;
}

async function getSinglePost(preview, postId) {
  const query = `query{
            ryanblog(id:"${postId}", preview:${preview ? true : false}){                
               title,
               subHeader,
               tags,
               text { json }
            }
        }`
  const data = await fetchGraphQL(query);

  const post = extractPost(data);

  return { post };
}

export { getAllPostsForHome, getSinglePost };

