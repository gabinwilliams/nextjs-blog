import Link from "next/link";
import getPostsMetadata from "./components/getPostMetadata";

type Props = {};

const HomePage = ({}: Props) => {
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
