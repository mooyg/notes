import { Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getImagePath } from './lib'

type IEmoji = {
  shortName: string
  boxSize?: string
}
export const Emoticon = (props: any) => {
  const [imageId, setImageId] = useState<string | null>('')
  useEffect(() => {
    setImageId(getImagePath(props.shortName.toLowerCase()))
  }, [props.shortName])

  return (
    <div {...props.attributes}>
      <div contentEditable={false}>
        <Image
          loading="lazy"
          p="2px"
          height="8"
          draggable="false"
          src={`http://localhost:8080/emoji/${imageId}`}
          {...props.attributes}
        />
      </div>
      {props.children}
    </div>
  )
}
