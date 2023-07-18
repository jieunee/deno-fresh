// routes/api/random-uuid.ts

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    GET(_req) {
        const uuid = crypto.randomUUID();
        return new Response(JSON.stringify(uuid), {
            headers: {
                "Content-type": "application/json",
            },
        });
    },
};