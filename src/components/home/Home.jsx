import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-[1000px] h-[650px] mt-10 items-center bg-[#dcdcdc] rounded-[40px] flex flex-col justify-center">
      <article className="flex flex-col gap-10">
        <h1 className="text-center font-bold text-[40px]">
          Wellcome to ToDoPy
        </h1>
        <p className="text-center">
          A to-do app is a simple, user-friendly digital tool designed to help{" "}
          <br />
          individuals and teams organize tasks and manage their daily, <br />
          activities efficiently. Users can create, edit, and prioritize tasks
          set, <br />
          deadlines or reminders, categorize items , and track their progress
          all, <br />
          within an intuitive and accessible interface. These apps essential
          <br />
          for improving productivity, reducing stress , and ensuring that <br />
          important responsibilities are not forgotten
        </p>
      </article>
      <Link
        className="w-[220px] h-[40px] rounded-[10px] bg-green-500 text-[22px] font-semibold mt-10 text-center"
        to={"/today"}
      >
        Get Started
      </Link>
    </main>
  );
};

export default Home;
