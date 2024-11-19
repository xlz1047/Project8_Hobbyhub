import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabase";
import PostCard from "./PostCard";

function HomeFeed() {
    const [posts, setPosts] = useState([]);
    const [sortOrder, setSortOrder] = useState("created_at");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchPosts();
    }, [sortOrder]);

    const fetchPosts = async () => {
        const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order(sortOrder, { ascending: false });

        if (!error) {
        setPosts(data);
        }
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
        <h1>HobbyHub</h1>
        <Link to="/create">Create a Post</Link>
        <input
            className="search-bar"
            type="text"
            placeholder="Search by title..."
            onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select className="select-sort" onChange={(e) => setSortOrder(e.target.value)}>
            <option value="created_at">Sort by Date</option>
            <option value="upvotes">Sort by Upvotes</option>
        </select>
        <div className="posts">
            {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
            ))}
        </div>
        </div>
    );
}

export default HomeFeed;
