import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "additional";

type Props = { PostMetadata: PostMetadata };

const getPostsMetadata = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResults = matter(fileContents);
        return {
            title: matterResults.data.title,
            date: matterResults.data.date,
            subtitle: matterResults.data.subtitle,
            slug: fileName.replace(".md", " "),
        };
    });
    return posts;
};

const HomePage = ({ PostMetadata }: Props) => {
    const postMetadata = getPostsMetadata();
    const postPreviews = postMetadata.map((post) => (
        <div key={post.title}>
            <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.subtitle}</p>
            <p>{post.date}</p>
        </div>
    ));
    return <div>{postPreviews}</div>;
};

export default HomePage;
