import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import usePosts from "@/hooks/usePosts";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "./Button";
import Avatar from "./Avatar";

interface IFormProps {
  placeholder: string
  isComment?: boolean
  postId?: string
}

const Form: React.FunctionComponent<IFormProps> = (props) => {
  const registerModalState = useRegisterModal()
  const loginModalState = useLoginModal()

  const { data: currentUser } = useCurrentUser()
  const { mutate: mutatePosts } = usePosts()

  const [loading, setLoading] = useState(false)
  const [body, setBody] = useState('')

  const onSubmit = useCallback(
    async () => {
      setLoading(true)

      await axios.post('/api/posts', { body })

      toast.success('Tweet created')

      setBody('')
      mutatePosts()
    },
    [body, mutatePosts],
  )
  
  return (
    <div className="border-b-[1px] border-neutral-700 px-5 py-2">
      {
        currentUser ? (
          <div className="flex flex-row gap-4">
            <Avatar userId={currentUser?.id} />
            <div className="w-full">
              <textarea
                disabled={loading}
                onChange={(e) => setBody(e.target.value)}
                value={body}
                placeholder={props.placeholder}
                className="
                  disabled:opacity-80
                  peer
                  resize-none
                  mt-3
                  w-full
                  bg-slate-950
                  ring-0
                  outline-none
                  text-[20px]
                  placeholder-neutral-400
                  text-white
                "
              >
              </textarea>
              <div className="mt-4 flex flex-row justify-end">
                <Button
                  label="Tweet"
                  disabled={loading || !body}
                  onClick={onSubmit}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="py-8">
            <h1 className="text-white text-2xl text-center mb-4 font-bold">
              Welcome to Twitter!
            </h1>
            <div className="flex flex-row items-center justify-center gap-4">
              <Button label="Login" onClick={loginModalState.onOpen} />
              <Button
                secondary
                label="Register"
                onClick={registerModalState.onOpen}
              />
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Form;
