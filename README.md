
# Blog ( nap queen sleep )

This is a backend domain, "https://blog-nqs.onrender.com," which is hosted on a free hosting service called "Render." It provides the following endpoints for accessing, posting, updating, and deleting blog post data.



## Deployment

backend is hosted on free hosting platform ( render )


- https://blog-nqs.onrender.com




## API Documentation

### Get all posts
with this api endpoint we will get the all the posts data available in database

```http
  GET /api/posts
```
EX: https://blog-nqs.onrender.com/api/posts/651986cb41c0ba679da9aee3

### Get posts by id

we can get the specific blog post by its ID

```http
  GET /api/posts/:id
```
EX: https://blog-nqs.onrender.com/api/posts/651986cb41c0ba679da9aee3




### Get latest posts
It's gives us latest posts of all unique category.

```http
  GET /api/posts/latest
```
EX: https://blog-nqs.onrender.com/api/posts/latest

### post api
we also can create teh new blog posts with this api endpoint

```http
  POST /api/posts/
```
EX: https://blog-nqs.onrender.com/api/posts/

| Parameter   | Type   |                          |
| :----- | :----- | :---------------------------------- |
| `title` | `string` |
| `content` | `string` |
| `category_id` | `numerical string` |
| `category` | `string` |


```base
{

  "title": "our title",
  "content": " content ",
  "category_id": "1",
  "category": "category"
}

```



#### Update the posts

we can update the specific posts by it's id

```http
  PUT /api/posts/:id
```

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| `title`   | `string` | add the updated title  |
| `content`   | `string` | add the updated content |


EX: https://blog-nqs.onrender.com/api/posts/651986cb41c0ba679da9aee3




#### Delete the post by ID


```http
  DELETE /api/posts/:id
```

EX: https://blog-nqs.onrender.com/api/posts/651986cb41c0ba679da9aee3



## .env

```bash
MONGODB_URI="mongodb+srv://arpanwaddewar:<password>@cluster0.09mqzsf.mongodb.net/Blog"
```

