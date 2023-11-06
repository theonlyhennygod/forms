import { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';


function App() {

  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm addPost={addPost} />

      <section>
        <h2>Posts:</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
