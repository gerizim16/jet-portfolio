import { client } from "@root/sanity/lib/client";
import { token } from "@root/sanity/lib/token";
import * as queryStore from "@sanity/react-loader";

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;
