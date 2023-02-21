import React from "react";
import Link from "next/link";
import { PostMetadata } from "additional";

type Props = {
    post: PostMetadata;
};

const PostPreview = (props: Props) => {
    return (
        <div key={props.post.title}>
            <Link href={`/posts/${props.post.slug}`}>
                <h2>{props.post.title}</h2>
            </Link>
            <p>{props.post.subtitle}</p>
            <p>{props.post.date}</p>
        </div>
    );
};

export default PostPreview;
