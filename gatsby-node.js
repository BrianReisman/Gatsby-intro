// actions, graphql, reporter come from Gatsby. Reporter === console.log()

exports.createPages = async ({ actions, graphql, reporter }) => {
  //note that here this is a function call.
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  //only getting the slug here

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  // if we get past the result.errors then:
  const posts = result.data.allMdx.nodes;

  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
