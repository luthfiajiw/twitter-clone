import { useCallback, useMemo } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";
import { toast } from "react-hot-toast";
import axios from "axios";
import { create } from "zustand";
import { useLoading } from "./useLoading";

function useFollow(userId: string) {
  const path = '/api/follow'
  const loadingState = useLoading()
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser()
  const { mutate: mutateFetchedUser } = useUser(userId)

  const loginModalState = useLoginModal()

  const isFollowing : boolean = useMemo(() => {
    const list = currentUser?.followingIds || []

    return list.includes(userId)
  }, [userId, currentUser?.followingIds])

  const toggleFollow = useCallback(async () => {
    if (!currentUser) {
      return loginModalState.onOpen()
    }

    try {
      loadingState.setLoadingPost(true)
      if (isFollowing) {
        await axios.delete(path, { data: { userId } })
        toast.success('Unfollowing')
      } else {
        await axios.post(path, { userId })
        toast.success(`Following`)
    }

      mutateCurrentUser()
      mutateFetchedUser()
      loadingState.setLoadingPost(false)
    } catch (error) {
      toast.error("Something went wrong")
    }
  }, [
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchedUser,
    loginModalState
  ])

  return {
    isFollowing,
    toggleFollow,
  }
}

export default useFollow