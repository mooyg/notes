import { Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getImagePath } from './lib'

type IEmoji = {
  shortName: string
  boxSize?: string
}
export const Emoji = ({ shortName, boxSize }: IEmoji) => {
  const [imageId, setImageId] = useState<string | null>('')
  useEffect(() => {
    setImageId(getImagePath(shortName.toLowerCase()))
  }, [shortName])

  return (
    <Image
      loading="lazy"
      p="2px"
      draggable="false"
      boxSize={boxSize ? boxSize : '28px'}
      src={`http://localhost:8080/emoji/${imageId}`}
    />
  )
}
