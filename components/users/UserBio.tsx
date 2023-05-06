import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { format } from "date-fns";
import { useMemo } from "react";
import Button from "../Button";
import { BiCalendar } from "react-icons/bi";
import useEditModal from "@/hooks/useEditModal";

interface IUserBioProps {
  userId: string
}

const UserBio: React.FunctionComponent<IUserBioProps> = (props) => {
  const { data: currentUser } = useCurrentUser()
  const { data: fetchedUser } = useUser(props.userId)
  const editModalState = useEditModal()

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null
    }

    return format(new Date(fetchedUser.createdAt), 'MMMM yyyy')
  }, [fetchedUser?.createdAt])
  
  return (
    <div className="border-b-[1px] border-neutral-700 pb-4">
      <div className="flex justify-end p-2">
        {
          currentUser?.id !== fetchedUser?.id
          ? <Button secondary label="Follow" onClick={() => {}} />
          : <Button secondary label="Edit" onClick={editModalState.onOpen} />
        }
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-neutral-400">
            @{fetchedUser?.username}
          </p>
        </div>
        <div className="mt-4">
          <p className="text-white">
            {fetchedUser?.bio}
          </p>
          <div
            className="
              flex
              flex-row
              items-center
              gap-2
              mt-4
              text-neutral-400
            "
          >
            <BiCalendar size={24} /> <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">
              {fetchedUser?.followingIds?.length}
            </p>
            <p className="text-neutral-400">
              Following
            </p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">
              {fetchedUser?.followersCount || 0}
            </p>
            <p className="text-neutral-400">
              Followers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;
