import React, { useState, useEffect } from "react";

function PostsList({userName}) {
  const [pinboards, setPinboards] = useState([]);

  useEffect(() => {
    if (userName) {
    fetch("https://embed-1-do-not-delete.thoughtspotdev.cloud/api/rest/2.0/metadata/search", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data instanceof Array) {
          const pinboardList = (data || []).map(el => ({id:el.metadata_id,name:el.metadata_name}))
          setPinboards(pinboardList);
        }
      });
    }
  }, [userName]);

  return (
    <div>
      <h2>List of Pinboards:</h2>
      <ul>
        {pinboards.map((pinboard) => (
          <li key={pinboard.id}><a href={`/post/${pinboard.id}`}>{pinboard.name}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
