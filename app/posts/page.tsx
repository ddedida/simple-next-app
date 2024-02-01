import React from "react";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";
import Link from "next/link";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, {
    cache: "no-store", // it will fetching data dynamically every there is request
  });
  const posts: Iposts[] = await response.json();

  return (
    <div className="w-[640px] h-[640px] my-auto bg-white rounded-lg overflow-auto px-4 py-4">
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <div className="flex items-center">
        <Link
          href="/"
          className="flex-none text-white text-sm font-semibold bg-purple-700 rounded-md py-2 px-4 hover:bg-purple-500 transition duration-150 ease-in-out"
        >
          Home
        </Link>
        <h1 className="text-neutral-900 flex-1 text-center font-bold text-xl">
          Post Page
        </h1>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {posts.map((post) => {
          return (
            <CardList key={post.id}>
              <div className="text-neutral-900 text-sm border border-gray-300 px-4 py-4 rounded-md">
                <div className="flex gap-2">
                  <div className="w-16 flex justify-between font-bold">
                    <p>Post Id</p>
                    <p>:</p>
                  </div>
                  <p>{post.id}</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-16 flex justify-between font-bold">
                    <p>Title</p>
                    <p>:</p>
                  </div>
                  <p>{post.title}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-16 flex justify-between font-bold">
                    <p>Body</p>
                    <p>:</p>
                  </div>
                  <p className="text-justify">{post.body}</p>
                </div>
                <div className="mt-2">
                  <ViewUserButton userId={post.userId} />
                </div>
              </div>
            </CardList>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
