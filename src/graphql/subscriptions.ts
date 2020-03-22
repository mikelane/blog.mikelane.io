// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      posts {
        items {
          id
          title
          created
          slug
          content
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      posts {
        items {
          id
          title
          created
          slug
          content
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      posts {
        items {
          id
          title
          created
          slug
          content
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      created
      slug
      content
      blog {
        id
        name
        posts {
          nextToken
        }
      }
      comments {
        items {
          id
          content
          created
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      created
      slug
      content
      blog {
        id
        name
        posts {
          nextToken
        }
      }
      comments {
        items {
          id
          content
          created
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      created
      slug
      content
      blog {
        id
        name
        posts {
          nextToken
        }
      }
      comments {
        items {
          id
          content
          created
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      created
      post {
        id
        title
        created
        slug
        content
        blog {
          id
          name
        }
        comments {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      created
      post {
        id
        title
        created
        slug
        content
        blog {
          id
          name
        }
        comments {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      created
      post {
        id
        title
        created
        slug
        content
        blog {
          id
          name
        }
        comments {
          nextToken
        }
      }
    }
  }
`;
