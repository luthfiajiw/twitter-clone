import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "./Modal";
import Input from "../Input";
import ImageUpload from "../users/ImageUpload";

interface IEditModalProps {
}

const EditModal: React.FunctionComponent<IEditModalProps> = (props) => {
  const {data: currentUser} = useCurrentUser()
  const {mutate: mutateFetchedUser} = useUser(currentUser?.id)
  const editModalState = useEditModal()

  const [loading, setLoading] = useState(false)
  const [profileImage, setProfileImage] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [bio, setBio] = useState("")

  useEffect(() => {
    if (editModalState.isOpen) {
      setProfileImage(currentUser?.profileImage)
      setCoverImage(currentUser?.coverImage)
      setName(currentUser?.name)
      setUsername(currentUser?.username)
      setBio(currentUser?.bio)
    }
  }, [editModalState.isOpen])
  
  const onSubmit = useCallback(async () => {
    try {
      setLoading(true)

      await axios.patch('/api/edit', {
        name,
        username,
        bio,
        profileImage,
        coverImage
      })

      mutateFetchedUser()
      toast.success("Updated")
      editModalState.onClose()
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }, [name, username, bio, profileImage, coverImage, editModalState, mutateFetchedUser, currentUser])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload
        value={profileImage}
        disabled={loading}
        onChange={(baes64) => setProfileImage(baes64)}
        label="Upload profile image"
      />
      <ImageUpload
        value={coverImage}
        disabled={loading}
        onChange={(baes64) => setCoverImage(baes64)}
        label="Upload cover image"
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={loading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={loading}
      />
      <Input
        placeholder="Bio"
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        disabled={loading}
      />
    </div>
  )
  
  return (
    <Modal
      disabled={loading}
      isOpen={editModalState.isOpen}
      title="Edit your profile"
      onClose={editModalState.onClose}
      actionLabel="Save"
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default EditModal;
