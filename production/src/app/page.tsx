import AboutUs from "@default/components/Page/HomePage/AboutUs/AboutUs";
import Blog from "@default/components/Page/HomePage/Blog/Blog";
import Hero from "@default/components/Page/HomePage/Hero/Hero";
import Offer from "@default/components/Page/HomePage/Offer/Offer";
import Projects from "@default/components/Page/HomePage/Projects/Projects";
import Services from "@default/components/Page/HomePage/Services/Services";
import Statistics from "@default/components/Page/HomePage/Statistics/Statistics";
import WatchWord from "@default/components/Page/HomePage/WatchWord/WatchWord";
import { Metadata } from "next";
import { wordpressAPI } from "@default/lib/wordpress/configs";
import { Suspense } from "react";
import { iArticlesHomePage, iProjectCard } from "@default/ts/interfaces";

export async function generateMetadata(): Promise<Metadata> {
	const seo = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query PageSeo {
				page(id: "/", idType: URI) {
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
			opengraphImage,
			opengraphTitle,
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
			publishedTime: date,
			locale: "pl",
			images: [
				{
					url: opengraphImage?.sourceUrl ?? "",
				},
			],
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

export default async function HomePage() {
	const page = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query HomePageContent {
				page(id: "/", idType: URI) {
					homePage {
						aboutUs {
							title
							content
						}
						blog {
							button
							content
							title
							uri
						}
						hero {
							backgroundimage {
								altText
								sourceUrl(size: LARGE)
								title(format: RENDERED)
							}
							buttons {
								label
								uri
							}
							slogan
							title
						}
						projects {
							button
							content
							title
							uri
						}
						offer {
							button
							cards {
								button
								content
								title
								uri
							}
							content
							title
							uri
						}
						servicesCards {
							button
							color
							image {
								altText
								sourceUrl(size: POST_THUMBNAIL)
								title
							}
							title
							uri
						}
						statistics {
							description
							icon
							value
						}
						watchWord
					}
				}
				posts(first: 6) {
					edges {
						node {
							categories(last: 1) {
								edges {
									node {
										name
										uri
									}
								}
							}
							date
							featuredImage {
								node {
									altText
									sourceUrl(size: POST_THUMBNAIL)
									title(format: RENDERED)
								}
							}
							title(format: RENDERED)
							uri
							post {
								author {
									... on Teammate {
										teammate {
											fullname {
												firstname
												lastname
											}
										}
									}
								}
							}
						}
					}
				}
				projects(first: 5) {
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
						}
					}
				}
				teammates(first: 3) {
					edges {
						node {
							featuredImage {
								node {
									altText
									sourceUrl(size: POST_THUMBNAIL)
									title(format: RENDERED)
								}
							}
							teammate {
								fullname {
									firstname
									lastname
								}
								job {
									jobName
								}
							}
							uri
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
	const articles: iArticlesHomePage = await fetch(wordpressAPI, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
			query ArticleHomeItems {
				posts(first: 6) {
				  edges {
					node {
					  categories(last: 1) {
						edges {
						  node {
							name
							uri
						  }
						}
					  }
					  post {
						author {
						  ... on Teammate {
							teammate {
							  fullname {
								firstname
								lastname
							  }
							}
							uri
						  }
						}
					  }
					  title(format: RENDERED)
					  uri
					  date
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
			  }`,
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
				projects(first: 4) {
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
			  }`,
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

	if (page.data) {
		const {
			page: { homePage },
			teammates,
		} = page.data;
		return (
			<>
				<Hero
					buttons={homePage.hero.buttons}
					image={{
						alt: homePage.hero.backgroundimage.altText,
						src: homePage.hero.backgroundimage.sourceUrl,
						title: homePage.hero.backgroundimage.title,
					}}
					slogan={homePage.hero.slogan}
					title={homePage.hero.title}
				/>
				<Services cards={homePage.servicesCards} />
				<WatchWord content={homePage.watchWord} />
				<Suspense fallback={<div>loading blog section</div>}>
					<Blog
						button={{
							label: homePage.blog.button,
							uri: homePage.blog.uri,
						}}
						content={homePage.blog.content}
						title={homePage.blog.title}
						cards={articles.data.posts.edges}
					/>
				</Suspense>
				<Statistics cards={homePage.statistics} />
				<Projects
					button={homePage.projects.button}
					cards={works}
					content={homePage.projects.content}
					title={homePage.projects.title}
					uri={homePage.projects.uri}
				/>
				<Offer
					button={homePage.offer.button}
					cards={homePage.offer.cards}
					content={homePage.offer.content}
					title={homePage.offer.title}
					uri={homePage.offer.uri}
				/>
				<AboutUs
					cards={teammates.edges}
					title={homePage.aboutUs.title}
					content={homePage.aboutUs.content}
				/>
			</>
		);
	} else {
		return (
			<>
				<h2>Kochanie, poczekaj chwilę.... jeszcze się szykuję</h2>
				<em
					style={{
						fontSize: "5rem",
						color: "lime",
					}}
				>
					Z dedykacją dla Marty Łusiewicz
				</em>
			</>
		);
	}
}
