import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";

function CreatePostForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
        alert("Title is required!");
        return;
        }

        const { error } = await supabase.from("posts").insert([
        {
            title: title.trim(),
            content: content.trim(),
            image_url: imageUrl.trim(),
            upvotes: 0,
            created_at: new Date(),
        },
        ]);

        if (!error) {
        navigate("/");
        } else {
        console.error(error);
        }
    };

    return (
        <div>
        <h2>Create Post</h2>
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
            <button type="submit">Create Post</button>
        </form>
        </div>
    );
}

export default CreatePostForm;
