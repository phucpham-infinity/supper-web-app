
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const queryClient = new QueryClient()

export const ApiProvider = (props: any) => <QueryClientProvider client={queryClient}>
  {props.children}
</QueryClientProvider>