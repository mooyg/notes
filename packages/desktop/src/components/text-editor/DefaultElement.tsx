import { AnyObject, SPRenderElementProps, SPRenderLeafProps } from '@udecode/plate-core'
import React, { PropsWithChildren } from 'react'

export const DefaultElement = (
  props: PropsWithChildren<SPRenderElementProps<AnyObject> | SPRenderLeafProps<AnyObject>>
) => {
  return <span {...props.attributes}>{props.children}</span>
}
