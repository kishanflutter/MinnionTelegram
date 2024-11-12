import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <TonConnectUIProvider
        manifestUrl={`https://azure-immense-aardvark-399.mypinata.cloud/ipfs/QmXja7fyHYqaRM7HYrzMPpXPoJmsZP1voUywLG8qigXtZQ`}
      >
        {children}
      </TonConnectUIProvider>

      <ToastContainer
        theme="dark"
        position="top-center"
        hideProgressBar
        stacked
      />
    </QueryClientProvider>
  );
}
