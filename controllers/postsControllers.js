import { BlogPosts } from "../mongoDB/models/blogSchema.js";

export const GetAllPosts = async (req, res) => {
  const posts = await BlogPosts.find();
  posts.length === 0
    ? res.status(200).json({ data: null, message: " No Blogs Posts available" })
    : res.status(200).json(posts);
};

export const GetPostsById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await BlogPosts.findOne({ _id: postId });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const newPost = async (req, res) => {
  try {
    const { title, content, category_id, category } = req.body;

    if (!title || !content || !category_id || !category) {
      return res
        .status(400)
        .json({ error: "Please provide title, content, and category_id" });
    }

    const post = new BlogPosts({ title, content, category_id, category });

    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updatePosts = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    if (!title || !content) {
      return res
        .status(400)
        .json({ error: "Please provide title and content" });
    }

    const updatedPost = await BlogPosts.findByIdAndUpdate(
      postId,
      { title, content, updated_at: Date.now() },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const deletedPost = await BlogPosts.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
