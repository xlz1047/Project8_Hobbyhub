import React, { useState, useEffect } from "react";
import supabase from "../supabase";

function Comments({ postId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        const { data } = await supabase.from("comments").select("*").eq("post_id", postId);
        setComments(data || []);
    };

    const handleAddComment = async () => {
        await supabase.from("comments").insert([{ post_id: postId, content: newComment }]);
        setNewComment("");
        fetchComments();
    };

    return (
        <div className="comments">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
            <div key={index} className="comment-card">{comment.content}</div>
        ))}
        <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
        />
        <button onClick={handleAddComment}>Post Comment</button>
        </div>
    );
}

export default Comments;
