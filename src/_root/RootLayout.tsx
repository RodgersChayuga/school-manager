import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ? (
        <section className="flex flex-col items-center flex-1 w-screen h-screen ">
          <Outlet />
        </section>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RootLayout;
