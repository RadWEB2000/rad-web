import Cards from "@default/components/Page/ProjectsPage/Cards/Cards";
import Content from "@default/components/Page/PostPage/Content/Content";
import getSplitWordpressContent from "@default/lib/functions/getSplitWordpressContent";
import Hero from "@default/components/Page/ProjectsPage/Hero/Hero";
import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import { iProjectCard } from "@default/ts/interfaces";
export async function generateMetadata(): Promise<Metadata> {
	const seo = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query PageSeo {
				page(id: "/projekty", idType: URI) {
					seo {
						opengraphTitle
						opengraphSiteName
						opengraphType
						metaDesc
						opengraphDescription
						title
						opengraphImage {
                            altText
                            date
                            sourceUrl(size: POST_THUMBNAIL)
                            title(format: RENDERED)
                        }
					}
					modified
					date
				}
			}
			`,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

	const {
		seo: {
			opengraphTitle,
			opengraphImage,
			opengraphSiteName,
			opengraphType,
			metaDesc,
			opengraphDescription,
			title,
		},
		modified,
		date,
	} = seo.data.page;
	return {
		applicationName: opengraphSiteName,
		description: metaDesc,
		title: title,
		robots: {
			index: true,
			follow: true,
		},
		openGraph: {
			description: opengraphDescription,
			title: opengraphTitle,
			type: opengraphType,
			siteName: opengraphSiteName,
			modifiedTime: modified,
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
			publishedTime: date,
			locale: "pl",
		},
		twitter: {
			description: opengraphDescription,
			title: opengraphTitle,
			creator: opengraphSiteName,
			site: "RadWEB",
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
		},
	};
}

export default async function ProjectsPage() {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query ProjectsPage {
				page(id: "/projekty", idType: URI) {
					title
					content(format: RENDERED)
				}
				projects(first: 400) {
					edges {
						node {
							title(format: RENDERED)
							uri
							date
							excerpt(format: RENDERED)
							featuredImage {
								node {
									altText
									sourceUrl(size: POST_THUMBNAIL)
									title(format: RENDERED)
								}
							}
						}
					}
				}
			}
				`,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
	const works: iProjectCard[] = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query ProjectItems {
				projects(first: 1000) {
				  edges {
					node {
					  excerpt(format: RENDERED)
					  featuredImage {
						node {
						  altText
						  sourceUrl(size: POST_THUMBNAIL)
						  title(format: RENDERED)
						}
					  }
					  title(format: RENDERED)
					  uri
					  date
					}
				  }
				}
			  }
				`,
		}),
	})
		.then((response) => response.json())
		.then(
			({
				data: {
					projects: { edges },
				},
			}) => {
				return edges;
			}
		);

	const {
		page: { content, title },
	} = page.data;
	const { beforeContent, afterContent } = getSplitWordpressContent({
		content: content,
	});

	return (
		<div>
			<Hero content={beforeContent} title={title} />
			<Cards cards={works} />
			{afterContent && <Content content={afterContent} />}
		</div>
	);
}
