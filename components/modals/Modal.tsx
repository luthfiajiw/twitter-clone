import * as React from 'react';
import { Fragment, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button';

interface IModalProps {
  isOpen?: boolean
  title: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  onClose: () => void
  onSubmit: () => void
}

const Modal: React.FC<IModalProps> = (props) => {
  const handleClose = useCallback(() => {
    if (props.disabled) return

    props.onClose()
  }, [props.disabled, props.onClose])

  const handleSubmit = useCallback(() => {
    if (props.disabled) return

    props.onSubmit()
  }, [props.disabled, props.onSubmit])

  if (props.isOpen == false) {
    return null
  }

  return (
    <Fragment>
      <div
        className='
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
        '
      >
        <div
          className='
            relative
            w-full
            lg:w-3/6
            mt-5
            mb-6
            mx-auto
            lg:max-w-3xl
            h-full
            lg:h-auto
          '
        >

          {/* CONTENT */}
          <div
            className='
              h-full
              lg:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-slate-950
              outline-none
              focus:outline-none
            '
          >

            {/* Header */}
            <div
              className='
                flex
                items-center
                justify-between
                pt-9
                pb-10
                px-10
                rounded-t
                
              '
            >
              <h3 className='text-3xl font-semibold text-white'>
                {props.title}
              </h3>
              <button
              onClick={handleClose}
                className='
                  pb-1
                  px-1
                  text-white
                  hover:opacity-70
                  transition
                '
              >
                <AiOutlineClose size={20}/>
              </button>
            </div>

            {/* Body */}
            <div className='relative pt-9 pb-10 px-10 flex-auto'>
              {props.body}
            </div>
            {/* Footer */}
            <div className='flex flex-col gap-2 pt-9 pb-10 px-10'>
              <Button
                label={props.actionLabel}
                disabled={props.disabled}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {props.footer}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
