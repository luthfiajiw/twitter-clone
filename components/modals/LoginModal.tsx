import useLoginModal from '@/hooks/useLoginModal';
import { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from './Modal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { signIn } from 'next-auth/react';

const LoginModal: React.FC = () => {
  const loginModalState = useLoginModal()
  const registerModalState = useRegisterModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onToggle = useCallback(() => {
    if (loading) return

    loginModalState.onClose()
    registerModalState.onOpen()
  }, [loading, registerModalState, loginModalState])

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true)
      
      await signIn('credentials', {
        email,
        password
      })
      
      loginModalState.onClose()
    } catch (error) {
      
    } finally {
      setLoading(false)
    }
  }, [loginModalState, email, password])

  const body = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <Input
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={loading}
      />
    </div>
  )

  const footer = (
    <p className='text-neutral-400 text-center mt-4'>
      First time using Twitter? <span>&nbsp;</span>
      <span 
        onClick={onToggle}
        className='text-white cursor-pointer hover:underline'
      >
        Register
      </span>
    </p>
  )

  return (
    <Modal
      disabled={loading}
      isOpen={loginModalState.isOpen}
      title='Login'
      actionLabel='Sign In'
      onClose={loginModalState.onClose}
      onSubmit={onSubmit}
      body={body}
      footer={footer}
    />
  );
};

export default LoginModal;
