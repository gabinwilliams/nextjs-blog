import fs from "fs";
import Markdown from "markdown-to-jsx";

type Props = { params: any };

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}/${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
};

const PostPage = (props: Props) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <p>
            <h1>This is a post {slug}</h1>
            <Markdown>{content}</Markdown>
        </p>
    );
};

export default PostPage;
