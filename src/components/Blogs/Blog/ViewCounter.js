"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React, { useEffect, useState } from 'react';

const supabase = createClientComponentClient({
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
    const [views, setViews] = useState(0);

    useEffect(() => {
        // Fetch the current view count from the database
        const fetchViewCount = async () => {
            try {
                const { data, error } = await supabase
                    .from("views")
                    .select("count")
                    .eq("slug", slug)
                    .single(); // Get single result based on the unique slug

                if (error) {
                    console.error("Error fetching view count:", error);
                } else {
                    setViews(data?.count || 0); // Set the count, default to 0 if not found
                }
            } catch (error) {
                console.error("Error fetching view count:", error);
            }
        };

        // Increment the view count
        const incrementView = async () => {
            try {
                let { error } = await supabase.rpc('increment', { slug_text: slug });

                if (error) {
                    console.error("Error incrementing view count inside try block:", error);
                } else {
                    // Fetch updated count after increment
                    fetchViewCount();
                }
            } catch (error) {
                console.error('An error occurred while incrementing the view count', error);
            }
        };

        // Fetch current count on initial load or slug change
        fetchViewCount();

        // Increment only if `noCount` is false
        if (!noCount) {
            incrementView();
        }

    }, [slug, noCount]); // Re-run the effect when `slug` or `noCount` changes

    if (showCount) {
        return (
            <div> {views} views</div>
        );
    } else {
        return null;
    }
};

export default ViewCounter;
