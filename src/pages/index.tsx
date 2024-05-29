import MyNavbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import Title from "@/components/Title";
import { Avatar, Button, Input, Textarea } from "@nextui-org/react";
import { ChangeEventHandler, useState } from "react";

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

export default function Home() {
  const [posts, setPosts] = useState(DEFAULT_POSTS);
  const [content, setContent] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followings, setFollowings] = useState(0);
  const [followers, setFollowers] = useState(0);

  const handleClick = () => {
    const singlePost = {
      author: {
        avatar,
        name,
        username,
      },
      content, //content: content
      followings,
      followers,
    };

    setPosts([...posts, singlePost]);
  };

  const handleChangeUsername: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleChangeFollowings: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFollowings(Number(e.target.value));
  };

  const handleChangeFollowers: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFollowers(Number(e.target.value));
  };

  const handleChangeContent: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  const handleSelectFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];

      const fileReader = new FileReader();

      fileReader.onload = (result) => {
        setAvatar(fileReader.result as string);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <main>
      <MyNavbar />

      <div className="grid grid-cols-3 gap-2 mx-20 my-2 mb-20">
        {posts.map((item, index) => {
          return <PostCard key={index} {...item} />;
        })}
      </div>

      <div className="flex flex-col items-center pb-2">
        <h3 className="mb-2">Create a post</h3>

        <div>
          <div className="flex justify-center mb-2">
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <Avatar src={avatar} />
            </label>
            <input
              id="avatar-upload"
              type="file"
              hidden
              accept="image/*"
              onChange={handleSelectFile}
            />
          </div>
          <Input className="w-96 mb-2" label="Name" onChange={handleChangeName} />
          <Input
            className="w-96 mb-2"
            label="Username"
            onChange={handleChangeUsername}
          />
        </div>

        <Textarea
          rows={10}
          placeholder="What's on your mind?"
          className="w-96 mb-2"
          onChange={handleChangeContent}
        />

        <Input
          label="followings"
          className="w-96 mb-2"
          value={followings.toString()}
          onChange={handleChangeFollowings}
        />
        <Input
          label="followers"
          className="w-96 mb-2"
          value={followers.toString()}
          onChange={handleChangeFollowers}
        />

        <Button color="primary" onClick={handleClick}>
          Post
        </Button>
      </div>
    </main>
  );
}
