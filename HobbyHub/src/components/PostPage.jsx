import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import supabase from "../supabase";
import Comments from "./Comments";

function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
        if (!error) {
        setPost(data);
        }
    };

    const handleUpvote = async () => {
        const { data, error } = await supabase
        .from("posts")
        .update({ upvotes: post.upvotes + 1 })
        .eq("id", post.id);

        if (!error) {
        setPost(data[0]);
        }
    };

    const handleDelete = async () => {
        await supabase.from("posts").delete().eq("id", post.id);
        window.location = "/";
    };

    return post ? (
        <div>
        <h2>{post.title}</h2>
        <img src={post.image_url} alt={post.title} />
        <p>{post.content}</p>
        <button onClick={handleUpvote}>Upvote ({post.upvotes})</button>
        <Link to={`/edit/${post.id}`}>Edit Post</Link>
        <button onClick={handleDelete}>Delete Post</button>
        <Comments postId={post.id} />
        </div>
    ) : (
        <p>Loading...</p>
    );
}

export default PostPage;
