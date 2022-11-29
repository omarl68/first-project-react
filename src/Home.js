import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Loading from "./loading";
import Card from "./Card";

const Home = () => {
  //let name = "mario";
  /*   const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    setName("rejab");
    setAge(30);
    console.log(name);
  }; 
 const handlDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  const [name, setName] = useState("mario");*/

  const [blogs, setBlogs] = useState();
  const [isPending, setIsPending] = useState(true);
  const [objects, setCard] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });

      fetch("https://dummyjson.com/products/1")
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          return setCard(json);
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {error}
      {isPending && <Loading />}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!" /* handlDelete={handlDelete}  */
        />
      )}
      {objects && <Card object={objects} />}

      {/*       <button className="btn" onClick={() => setName("luigi")}>
        change name
      </button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
