/* eslint react/prop-types: 0 */
import { useEffect, useState } from "react";
// import { Buffer } from "buffer";
export function PostCard(post) {
  const [likes, setLikes] = useState({
    likes: post.post.post.likeCount,
  });

  const [liked, setLiked] = useState({
    liked: false,
  });

  const likePost = () => {
    if (liked.liked) {
      setLikes({
        ...likes,
        likes: parseInt(likes.likes) - 1,
      });
      console.log(likes);
      setLiked({
        ...liked,
        liked: false,
      });
    } else {
      setLikes({
        likes: parseInt(likes.likes) + 1,
      });
      console.log(parseInt(likes.likes) + 1);

      setLiked({
        liked: true,
      });
    }
  };

  const [comment, setComments] = useState({
    comment: post.post.post.commentCount,
  });

  const commentPost = () => {
    setComments({
      ...comment,
      comment: comment.comment + 1,
    });
  };
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");

  const fetchImageUrl = async (id) => {
    let response = await fetch(`http://localhost:4000/file/${id}`);
    //use string literals

    let data = await response.json();
    console.log(data);

    const uint8Array = new Uint8Array(data[0].data);

    const blob = new Blob([uint8Array], { type: "image/jpeg" });
    const imageUrl = URL.createObjectURL(blob);
    setUrl(imageUrl);
    setAlt(data[1]);
  };
  useEffect(() => {
    fetchImageUrl(post.post.post.img);
  }, [post]);
  return (
    <>
      <div className="card single_post">
        <div className="body">
          <div className="img-post">
            <img src={url} alt={alt} />
          </div>
          <h3>
            <a href="blog-details.html">{post.post.post.title}</a>
          </h3>
          <p>{post.post.post.body}</p>
        </div>
        <div className="footer">
          <ul className="stats">
            <li>
              <a
                href="javascript:void(0);"
                className="fa fa-heart"
                onClick={likePost}
              >
                {likes.likes}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0);"
                className="fa fa-comment"
                value={post.commentCount}
                onClick={commentPost}
              >
                {comment.comment}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
