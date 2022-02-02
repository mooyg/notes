import { Flex, IconButton } from '@chakra-ui/react'
import { AddIcon } from '../../icons'
import { Modal } from '../../modal/Modal'

export const CreateTemplate = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      Notes
      <Modal heading={'Create Template'} onSumbit={() => console.log('SUMBIT MODAL')}>
        <IconButton aria-label="create-button">
          <AddIcon />
        </IconButton>
      </Modal>
    </Flex>
  )
}
