'use client'

import { Button } from "@/components/ui/button"
import { useModal } from "@/providers/modal-provider"
import { Plus } from "lucide-react"

const WorkflowButton = () => {

    const { isOpen, setClose} = useModal()

    const handleClick = () => {
        // setOpen(
        //   <CustomModal
        //     title="Create a Workflow Automation"
        //     subheading="Workflows are a powerfull that help you automate tasks."
        //   >
        //     <Workflowform />
        //   </CustomModal>
        // )
      }

  return (
    <Button size={'icon'}>
        <Plus/>
    </Button>
  )
}

export default WorkflowButton
