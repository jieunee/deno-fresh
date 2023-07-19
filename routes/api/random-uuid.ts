// routes/api/random-uuid.ts
import GenerateUuid from "../../islands/GenerateUuid.ts";

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET(_req) {
        const uuid = GenerateUuid();
        return new Response(JSON.stringify(uuid), {
            headers: {
                "Content-type": "application/json",
            },
        });
    },
};