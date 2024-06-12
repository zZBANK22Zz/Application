import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Post } from "@/types";

interface Props {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onSubmit?: (post: Post) => void;
  post?: Post | null;
}

export default function Edit({ isOpen, onOpenChange, onSubmit, post }: Props) {
  const [editedPost, setEditedPost] = useState<Post | null>(null);

  useEffect(() => {
    if (post) {
      setEditedPost(post);
    }
  }, [post]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedPost) {
      setEditedPost({
        ...editedPost,
        content: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    if (editedPost && onSubmit) {
      onSubmit(editedPost);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">Edit Post</ModalHeader>
              <ModalBody className="text-black">
                <p>Edit your content.</p>
                <input
                  type="text"
                  value={editedPost?.content || ""}
                  onChange={handleInputChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose}>Cancel</Button>
                <Button onPress={handleSubmit}>Confirm</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
