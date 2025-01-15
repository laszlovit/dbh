import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			S.documentTypeListItem("post").title("Posts"),
			S.documentTypeListItem("testimonial").title("Testimonials"),
			S.documentTypeListItem("caseStudy").title("Case Studies"),
			S.documentTypeListItem("service").title("Services"),
			S.documentTypeListItem("gallery").title("Galleries"),
			S.documentTypeListItem("category").title("Categories"),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() &&
					![
						"post",
						"category",
						"service",
						"caseStudy",
						"testimonial",
						"gallery",
						"media.tag",
					].includes(item.getId()!),
			),
		]);
