import axios from "axios";

let instance = axios.create({
  baseURL: "https://simple-blog-api.crew.red/"
});

export const postsAPI = {
  getPosts() {
    return instance.get(`posts`).then((response: any) => response.data);
  },
  getComments(id: string) {
    return instance
      .get(`posts/${id}?_embed=comments`)
      .then((response: any) => response.data.comments);
  },
  createPost(title: string, body: string) {
    const data = JSON.stringify({
      title: title,
      body: body
    });
    return instance
      .post(`posts`, data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response: any) => response);
  }
};
