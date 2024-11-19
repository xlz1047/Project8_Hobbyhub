import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
    const formattedDate = new Date(post.created_at).toLocaleString();
    
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <p>Upvotes: {post.upvotes}</p>
            <p>Created At: {formattedDate}</p>
            <Link to={`/post/${post.id}`}>View Post</Link>
        </div>
    );
}

export default PostCard;
