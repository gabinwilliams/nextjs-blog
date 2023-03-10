import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostsMetadata from "app/components/getPostMetadata";

type Props = { params: any };

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

const PostPage = (props: Props) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div>
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
        </div>
    );
};

export default PostPage;

export const generateStaticParams = async () => {
    const posts = getPostsMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};
