import MyNavbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import Title from "@/components/Title";
import { Button } from "@nextui-org/react";

// justify -> แกนหลัก
// items -> แกนรอง

const posts = [
  {
    author: {
      avatar:
        "https://play-lh.googleusercontent.com/jA5PwYqtmoFS7StajBe2EawN4C8WDdltO68JcsrvYKSuhjcTap5QMETkloXSq5soqRBqFjuTAhh28AYrA6A=w240-h480-rw",
      name: "Tanakorn Karode",
      username: "tanakorn_karode",
    },
    content: "Hello My name is Sainy!",
    followings: 10,
    followers: 20,
  },
  {
    author: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4B4glHxuCLJAYdXwzux_mTtxvuIC1R_OjwosTUEtqnw&s",
      name: "Tanakorn Karode2",
      username: "tanakorn_karode1",
    },
    content: "Hello My name is Sainy!",
    followings: 12,
    followers: 23,
  },
  {
    author: {
      avatar:
        "https://hips.hearstapps.com/hmg-prod/images/index-avatar-1665421955.jpg?crop=0.888888888888889xw:1xh;center,top",
      name: "Tanakorn Karode2",
      username: "tanakorn_karode4",
    },
    content: "Hello My name is Sainy!",
    followings: 104,
    followers: 25,
  },
  {
    author: {
      avatar:
        "https://play-lh.googleusercontent.com/jA5PwYqtmoFS7StajBe2EawN4C8WDdltO68JcsrvYKSuhjcTap5QMETkloXSq5soqRBqFjuTAhh28AYrA6A=w240-h480-rw",
      name: "Tanakorn Karode2",
      username: "tanakorn_karode3",
    },
    content: "Hello My name is Sainy!",
    followings: 104,
    followers: 202,
  },
  {
    author: {
      avatar:
        "https://play-lh.googleusercontent.com/jA5PwYqtmoFS7StajBe2EawN4C8WDdltO68JcsrvYKSuhjcTap5QMETkloXSq5soqRBqFjuTAhh28AYrA6A=w240-h480-rw",
      name: "Tanakorn Karode2",
      username: "tanakorn_karode3",
    },
    content: "Hello My name is Sainy434!",
    followings: 103,
    followers: 204,
  },
];

// [1,2,3,4,5]

// Spread operator

export default function Home() {
  return (
    <main>
      <MyNavbar />

      <div className="flex flex-col items-center space-y-2 py-2">
        {/* <PostCard
          author={post.author}
          content={post.content}
          followings={post.followings}
          followers={post.followers}
        /> */}
        {/* {
          [
            <PostCard {...posts[0]} />,
            <PostCard {...posts[1]} />,
            <PostCard {...posts[2]} />,
            <PostCard {...posts[3]} />,
            <PostCard {...posts[4]} />,
          ]
        } */}
        {
          posts.map((item, index) => {
            return <PostCard key={index} {...item}/>
          })
        }
      </div>
    </main>
  );
}
