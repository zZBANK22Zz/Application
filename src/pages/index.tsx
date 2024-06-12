import ConfirmModal from "@/components/ConfirmModal";
import CreatePostModal from "@/components/CreatePostModal";
import MyNavbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { Post } from "@/types";
import { Button, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import Footer from "../components/Footer";
import Edit from "../components/EditModal";
import EditModal from "../components/EditModal";

// justify -> แกนหลัก
// items -> แกนรอง

const DEFAULT_POSTS = [
  {
    author: {
      avatar:
        "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
      name: "Ananthichai",
      username: "zZBANK22Zz",
    },
    content: "Holy shit it's so hard.",
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
  const editModalDisclosure = useDisclosure();

  const handleEdit = (index: number) => {
    editModalDisclosure.onOpen();
    setSelectedIndex(index);
    console.log("Editing: " + index);
  };

  const handleConfirmEdit = (updatedPost: Post) => {
    if (selectedIndex !== null) {
      const updatedPosts = posts.map((post, index) => {
        if (index === selectedIndex) {
          return updatedPost;
        }
        return post;
      });
      setPosts(updatedPosts);
    }
    console.log("Edited");
    editModalDisclosure.onClose();
  };

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
  };

  const createPost = (post: Post) => {
    setPosts([...posts, post]);
    createPostDisclosure.onClose();
  };

  return (
    <main className=" h-[100vh] bg-white">
      <MyNavbar user={DEFAULT_POSTS[0].author} />

      <div className="flex flex-col items-center">
        <div className="flex flex-col my-2 gap-2">
          {posts.map((item, index) => {
            return (
              <PostCard
                key={index}
                {...item}
                handleDelete={() => handleDelete(index)}
                handleEdit={() => {
                  handleEdit(index);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-10 flex justify-center w-full z-50">
        <div className="bg-white p-2 rounded-full shadow-lg">
          {" "}
          <Button
            //radius="full"
            className="bg-gradient-to-tr from-purple-500 to-blue-500 text-white shadow-lg text-[20px] w-20 h-20 rounded-full flex items-center justify-center"
            onClick={handleCreatePost}
          >
            +
          </Button>
        </div>
      </div>
      <EditModal
        isOpen={editModalDisclosure.isOpen}
        onOpenChange={editModalDisclosure.onOpenChange}
        onSubmit={handleConfirmEdit}
        post={selectedIndex !== null ? posts[selectedIndex] : null}
      ></EditModal>

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

      <div className="bottom-0 fixed w-full">
        <Footer />
      </div>
    </main>
  );
}
