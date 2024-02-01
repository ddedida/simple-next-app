import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="w-[360px] h-fit mt-24 bg-white flex flex-col gap-4 justify-center items-center rounded-lg overflow-hidden px-4 py-4">
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
              className="fill-neutral-900"
            />
          </svg>
          <h1 className="font-bold text-xl text-neutral-900">Home</h1>
        </div>
        <Link
          href="/posts"
          className="w-full flex justify-center items-center py-2 text-white font-semibold bg-purple-700 rounded-md hover:bg-purple-500 transition duration-150 ease-in-out"
        >
          Post Page
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}
