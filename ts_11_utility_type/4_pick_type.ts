/**
 * Pick Type
 */

interface Post {
    title: string;
    content: string;
    createdAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>): Post {
    return { ...post, createdAt: new Date() };
}

createPost({
    title: 'Hello',
    content: 'World',
});
