import { getCurrentUser } from "@/lib/appwrite/api";

const Home = () => {
  return (
    <>
      <h1>Welcome, {getCurrentUser?.name}</h1>
      {/* <h1>Email: {getCurrentUser?.email}</h1> */}
    </>
  );
};

export default Home;
