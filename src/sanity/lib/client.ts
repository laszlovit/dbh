import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, studioUrl } from "../env";

export const client = createClient({
	projectId,
	dataset: dataset,
	apiVersion,
	useCdn: true,
	perspective: "published",
	stega: { studioUrl: studioUrl },
});
