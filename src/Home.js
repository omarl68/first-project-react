import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //let name = "mario";
  /*   const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    setName("rejab");
    setAge(30);
    console.log(name);
  }; */
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "mario",
      id: 1,
    },
    {
      title: "My new website!",
      body: "lorem ipsum ...",
      author: "mohssen",
      id: 2,
    },
    {
      title: "web dev top tips",
      body: "lorem ipsum ...",
      author: "fathi",
      id: 3,
    },
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "mario",
      id: 4,
    },
  ]);
  const handlDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  const [name, setName] = useState("mario");
  useEffect(() => {
    console.log("use effect");
    console.log(blogs);
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handlDelete={handlDelete} />
      <button className="btn" onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
