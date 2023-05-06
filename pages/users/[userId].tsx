import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { ClipLoader } from "react-spinners";

interface IUserViewProps {
}

const UserView: React.FunctionComponent<IUserViewProps> = (props) => {
  const router = useRouter()
  const { userId } = router.query;
  const { data: fetchedUser, isLoading } = useUser(userId as string)

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightBlue" size={70}/>
      </div>
    )
  }

  return (
    <Fragment>
      <Header label="Edan" showBackArrow />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
    </Fragment>
  );
};

export default UserView;