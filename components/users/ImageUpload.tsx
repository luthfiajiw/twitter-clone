import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface IImageUploadProps {
  onChange: (base64: string) => void
  label: string
  value?: string
  disabled?: boolean
}

const ImageUpload: React.FunctionComponent<IImageUploadProps> = (props) => {
  const [base64, setbase64] = useState(props.value)

  const handleChange = useCallback(
    (base64: string) => {
      props.onChange(base64)
    },
    [props.onChange],
  )

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0]
      const reader = new FileReader()

      reader.onload = (event: any) => {
        setbase64(event.target.result)
        handleChange(event.target.result)
      }

      reader.readAsDataURL(file)
    },
    [handleChange],
  )
  
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled: props.disabled,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': []
    }
  })

  return (
    <div
      {...getRootProps({
        className: 'w-full p-4 text-white text-center border-2 border-dotted'
      })}
    >
      <input {...getInputProps()} />
      {
        base64 ? (
          <div className="flex items-center justify-center">
            <Image
              src={base64}
              height={100}
              width={100}
              alt="Uploaded image"
            />
          </div>
        ) : (
          <p className="text-white">
            {props.label}
          </p>
        )
      }
    </div>
  );
};

export default ImageUpload;
