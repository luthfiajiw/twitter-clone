import useRegisterModal from '@/hooks/useRegisterModal';
import { useCallback, useState } from 'react';
import Input from '../Input';
import Modal from './Modal';
import useLoginModal from '@/hooks/useLoginModal';

const RegisterModal: React.FC = () => {
  const registerModalState = useRegisterModal()
  const loginModalState = useLoginModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)

  const onToggle = useCallback(() => {
    if (loading) return

    registerModalState.onClose()
    loginModalState.onOpen()
  }, [loading, registerModalState, loginModalState])

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true)
      // LOG IN
      registerModalState.onClose()
    } catch (error) {
      
    } finally {
      setLoading(false)
    }
  }, [registerModalState])

  const body = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={loading}
      />
      <Input
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={loading}
      />
      <Input
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
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
      Already have an account? <span>&nbsp;</span>
      <span 
        onClick={onToggle}
        className='text-white cursor-pointer hover:underline'
      >
        Sign In
      </span>
    </p>
  )

  return (
    <Modal
      disabled={loading}
      isOpen={registerModalState.isOpen}
      title='Create Account'
      actionLabel='Register'
      onClose={registerModalState.onClose}
      onSubmit={onSubmit}
      body={body}
      footer={footer}
    />
  );
};

export default RegisterModal;
