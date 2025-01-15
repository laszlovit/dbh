"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { CodeBracketSquareIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";
import { apiVersion, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";
import { structure } from "./src/sanity/structure";

export default defineConfig([
	{
		name: "production",
		basePath: "/studio",
		icon: RocketLaunchIcon,
		projectId,
		dataset: "production",
		// Add and edit the content schema in the './sanity/schemaTypes' folder
		schema,
		plugins: [
			structureTool({ structure }),
			// Vision is for querying with GROQ from inside the Studio
			// https://www.sanity.io/docs/the-vision-plugin
			visionTool({ defaultApiVersion: apiVersion }),
			media(),
		],
	},
	{
		name: "staging",
		basePath: "/staging",
		icon: CodeBracketSquareIcon,
		projectId,
		dataset: "staging",
		// Add and edit the content schema in the './sanity/schemaTypes' folder
		schema,
		plugins: [
			structureTool({ structure }),
			// Vision is for querying with GROQ from inside the Studio
			// https://www.sanity.io/docs/the-vision-plugin
			visionTool({ defaultApiVersion: apiVersion }),
			media(),
		],
	},
]);
