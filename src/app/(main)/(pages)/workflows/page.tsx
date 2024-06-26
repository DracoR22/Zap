import React from 'react'
import WorkflowButton from './_components/workflow-button'

const WorkflowsPage = () => {
  return (
    <div className='flex flex-col gap-4 relative'>
       <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
            Workflows
            <WorkflowButton/>
       </h1>
    </div>
  )
}

export default WorkflowsPage
