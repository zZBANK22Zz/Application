import ConfirmModal from "@/components/ConfirmModal";
import CreatePostModal from "@/components/CreatePostModal";
import MyNavbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

// justify -> แกนหลัก
// items -> แกนรอง

const DEFAULT_POSTS = [
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
];

// [1,2,3,4,5]

// Spread operator
// Create Read Update Delete

export default function Home() {
  const [posts, setPosts] = useState(DEFAULT_POSTS);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const createPostDisclosure = useDisclosure();
  const confirmModalDisclosure = useDisclosure();

  const handleDelete = (index: number) => {
    confirmModalDisclosure.onOpen();
    setSelectedIndex(index);
  };

  const handleConfirmDelete = () => {
    const filtered = posts.filter((_, index) => {
      return index !== selectedIndex;
    });

    setPosts(filtered);
  };

  const handleCreatePost = () => {
    createPostDisclosure.onOpen();
  }

  const createPost = (post: Post) => {
    setPosts([...posts, post])
    createPostDisclosure.onClose();
  }

  return (
    <main className=" h-[100vh]">
      <MyNavbar />

      <div className="grid grid-cols-3 gap-2 mx-20 my-2 mb-20">
        {posts.map((item, index) => {
          return (
            <PostCard
              key={index}
              {...item}
              handleDelete={() => handleDelete(index)}
            />
          );
        })}
      </div>
      
      <div className="fixed right-20 bottom-10">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          onClick={handleCreatePost}
        >
          +
        </Button>
      </div>

      <CreatePostModal
        isOpen={createPostDisclosure.isOpen}
        onOpenChange={createPostDisclosure.onOpenChange}
        onSubmit={createPost}
      />
      <ConfirmModal
        isOpen={confirmModalDisclosure.isOpen}
        onOpenChange={confirmModalDisclosure.onOpenChange}
        onDelete={handleConfirmDelete}
      />
    </main>
  );
}
