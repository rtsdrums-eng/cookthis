export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const RecipesPartsFragmentDoc = gql`
    fragment RecipesParts on Recipes {
  __typename
  title
  description
  author
  prepTime
  cookTime
  totalTime
  servings
  category
  tags
  image
  imageAlt
  date
  sortOrder
  draft
  body
}
    `;
export const RecipesDocument = gql`
    query recipes($relativePath: String!) {
  recipes(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...RecipesParts
  }
}
    ${RecipesPartsFragmentDoc}`;
export const RecipesConnectionDocument = gql`
    query recipesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: RecipesFilter) {
  recipesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...RecipesParts
      }
    }
  }
}
    ${RecipesPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    recipes(variables, options) {
      return requester(RecipesDocument, variables, options);
    },
    recipesConnection(variables, options) {
      return requester(RecipesConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.1/content/3795c97b-9434-4f41-b7f6-bdafcf6816d3/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
