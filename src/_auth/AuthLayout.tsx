import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex ">
          <section className="flex flex-col items-center justify-center flex-1 py-10 scroll-m-0 bg-slate-50 ">
            <Outlet />
          </section>

          <img
            src="/assets/auth-bg.jpg"
            alt="logo"
            className="sticky top-0 hidden object-cover w-1/2 h-screen bg-no-repeat xl:block"
          />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
