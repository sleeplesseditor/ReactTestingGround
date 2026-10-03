import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fragmentRefs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fragmentRefs/"!</div>
}
