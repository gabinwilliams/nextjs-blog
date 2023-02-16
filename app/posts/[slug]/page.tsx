import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

type Props = { params: any };

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult.content;
};

const PostPage = (props: Props) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <div>
            <h1>This is a post {slug}</h1>
            <Markdown>{content}</Markdown>
        </div>
    );
};

export default PostPage;
