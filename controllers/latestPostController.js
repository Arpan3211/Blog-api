import { BlogPosts } from "../mongoDB/models/blogSchema.js";

export const getLatestPost = async (req, res) => {
  try {
    const pipeline = [
      {
        $sort: { created_at: -1 },
      },
      {
        $group: {
          _id: "$category",
          latestPost: { $first: "$$ROOT" },
        },
      },
      {
        $replaceRoot: { newRoot: "$latestPost" },
      },
    ];

    const latestPosts = await BlogPosts.aggregate(pipeline);

    res.json(latestPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


