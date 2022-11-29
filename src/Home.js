import BlogList from "./BlogList";
import Loading from "./loading";
import Card from "./Card";
import useFetch from "./useFetch";

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

  //const {data,isPending,error} = useFetch('http://localhost:8000/blogs');


  const blogs = useFetch("http://localhost:8000/blogs");
  const products = useFetch("https://dummyjson.com/products/2");

  return (
    <div className="home">
      {blogs?.error}
      {blogs?.isPending && <Loading />}
      {blogs?.data && (
        <BlogList
          blogs={blogs?.data}
          title="All Blogs!" /* handlDelete={handlDelete}  */
        />
      )}
      {products?.data && <Card object={products?.data} />}

      {/*       <button className="btn" onClick={() => setName("luigi")}>
        change name
      </button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
