import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../supabase";

function EditPostForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const { data, error } = await supabase.from("posts").select("*").eq("id", id).single();
        if (data) {
        setTitle(data.title);
        setContent(data.content || "");
        setImageUrl(data.image_url || "");
        } else {
        console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
        alert("Title is required!");
        return;
        }

        const { error } = await supabase
        .from("posts")
        .update({
            title: title.trim(),
            content: content.trim(),
            image_url: imageUrl.trim(),
        })
        .eq("id", id);

        if (!error) {
        navigate(`/post/${id}`);
        } else {
        console.error(error);
        }
    };

    return (
        <div>
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Title:
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            </label>
            <label>
            Content:
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            </label>
            <label>
            Image URL:
            <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            </label>
            <button type="submit">Save Changes</button>
        </form>
        </div>
    );
}

export default EditPostForm;
