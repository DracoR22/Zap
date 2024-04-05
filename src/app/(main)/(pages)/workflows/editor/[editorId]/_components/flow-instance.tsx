'use client'

import { Button } from "@/components/ui/button"
import { useNodeConnections } from "@/providers/connections-provider"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { onCreateNodesEdges, onFlowPublish } from "../_actions/workflow-connections"
import { toast } from "sonner"

interface Props {
    children: React.ReactNode
    edges: any[]
    nodes: any[]
}

const FlowInstance = ({ children, edges, nodes }: Props) => {

    const [isFlow, setIsFlow] = useState([])

    const pathname = usePathname()

    const { nodeConnection } = useNodeConnections()

    const onFlowAutomation = useCallback(async () => {
        const flow = await onCreateNodesEdges(
          pathname.split('/').pop()!,
          JSON.stringify(nodes),
          JSON.stringify(edges),
          JSON.stringify(isFlow)
        )
    
        if (flow) toast.message(flow.message)
      }, [nodeConnection])

    const onPublishWorkflow = useCallback(async () => {
        const response = await onFlowPublish(pathname.split('/').pop()!, true)
        if (response) toast.message(response)
    }, [])

    
  const onAutomateFlow = async () => {
    const flows: any = []
    const connectedEdges = edges.map((edge) => edge.target)
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type)
        }
      })
    })

    setIsFlow(flows)
  }

  useEffect(() => {
    onAutomateFlow()
  }, [edges])

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-3 p-4">
               <Button onClick={onFlowAutomation} disabled={isFlow.length < 1}>
                  Save
               </Button>
               <Button onClick={onPublishWorkflow} disabled={isFlow.length < 1}>
                  Publish
               </Button>
            </div>
            {children}
        </div>
    )
}

export default FlowInstance
