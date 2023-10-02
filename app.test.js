import request from 'supertest';
import app from './server';
import mongoose from 'mongoose';

let server;

beforeAll(async () => {
    server = app.listen(5080, () =>
        console.log("server is running on port 5080"));
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("MongoDB is connected"));
});

describe('API Endpoints', () => {
    it('should get all posts', async () => {
        const response = await request(app).get('/api/posts/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Array));
    }, 10000);

    it('should get a post by ID', async () => {
        const postId = '651986cb41c0ba679da9aee3';
        const response = await request(app).get(`/api/posts/${postId}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
    });

    it('should create a new post', async () => {
        const newPost = {
            title: 'most popular songs of the year',
            content: 'Dance Monkey',
            category_id: '3',
            category: 'music',
        };

        const response = await request(app).post('/api/posts/').send(newPost);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.any(Object));
    });

    it('should update a post by ID', async () => {
        const postId = '65192ad38f8c92e244cf4e6d';
        const updatedPost = {
            title: 'Vacation',
            content: 'Enjoying and relaxing in the beach vacation under the sun and by the sea.',
        };

        const response = await request(app)
            .put(`/api/posts/${postId}`)
            .send(updatedPost);

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.any(Object));
    });

    it('should delete a post by ID', async () => {
        const postId = '651a85a6a535e6cee6cbab54'; 
        const response = await request(app).delete(`/api/posts/${postId}`);
        expect(response.status).toBe(204); 
    });
});

afterAll(async () => {
    await mongoose.connection.close(); 
    server.close(); 
});
