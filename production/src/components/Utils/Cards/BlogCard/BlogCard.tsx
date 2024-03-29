import Image from "next/image";
import Link from "next/link";
import styles from "@default/components/Utils/Cards/BlogCard/BlogCard.module.scss";
import { BsCalendar2Date } from "react-icons/bs";
import { getDate } from "@default/lib/functions/getDate";
import { tImage2 } from "@default/ts/types";

type tAuthor = {
	fullname: {
		firstname: string;
		lastname: string;
	};
	uri: string;
};
type tBlogArticleCard = {
	author: tAuthor;
	category: {
		name: string;
		uri: string;
	};
	excerpt: string;
	date: string;
	image: tImage2;
	title: string;
	uri: string;
};
type tHomeArticleCard = {
	author: tAuthor;
	category: {
		name: string;
		uri: string;
	};
	date: string;
	image: tImage2;
	title: string;
	uri: string;
};
type tRecommendedArticleCard = {
	category: {
		name: string;
		uri: string;
	};
	date: string;
	excerpt: string;
	image: tImage2;
	title: string;
	uri: string;
};
type tBlogCard = {
	category: {
		name: string;
		uri: string;
	};
	date: string;
	image: tImage2;
	title: string;
	uri: string;
} & (
	| {
			excerpt: string;
			variant: "recommended";
	  }
	| {
			variant: "blog";
			excerpt: string;
			author: tAuthor;
	  }
	| {
			variant: "home";
			author: tAuthor;
	  }
);

function BlogArticleCard(props: tBlogArticleCard) {
	const { author, category, date, excerpt, image, title, uri } = props;
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li className={styles.blog_article_card}>
			<Link className={styles.box} href={uri}>
				<div className={styles.image_box}>
					<figure className={styles.image}>
						<Image
							alt={image.altText}
							fill
							loading="lazy"
							src={image.sourceUrl}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title}
							quality={60}
						/>
					</figure>
				</div>
				<section className={styles.content}>
					<aside className={styles.details}>
						<Link className={styles.category} href={category.uri}>
							{category.name}
						</Link>
						<p className={styles.release}>{`${day} ${month} ${year}`}</p>
					</aside>
					<article className={styles.info}>
						<header className={styles.title_box}>
							<h3
								className={styles.title}
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						</header>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 100).trim() + "...",
							}}
						/>
					</article>
					<div className={styles.author_box}>
						<Link className={styles.author} href={author.uri}>
							{`${author.fullname.firstname} ${author.fullname.lastname}`}
						</Link>
					</div>
				</section>
			</Link>
		</li>
	);
}
function HomeArticleCard(props: tHomeArticleCard) {
	const { author, category, date, image, title, uri } = props;
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li className={styles.home_article_card}>
			<Link className={styles.box} href={uri}>
				<div className={styles.image_box}>
					<figure className={styles.image}>
						<Image
							alt={image.altText}
							fill
							src={image.sourceUrl}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title}
						/>
					</figure>
				</div>
				<section className={styles.content}>
					<header className={styles.title_box}>
						<h3
							className={styles.title}
							dangerouslySetInnerHTML={{ __html: title }}
						/>
					</header>
					<div className={styles.author_box}>
						<Link
							className={styles.author}
							href={author.uri}
						>{`${author.fullname.firstname} ${author.fullname.lastname}`}</Link>
					</div>
					<aside className={styles.details}>
						<Link className={styles.category} href={category.uri}>
							{category.name}
						</Link>
						<div className={styles.release}>
							<i className={styles.release_icon}>
								<BsCalendar2Date />
							</i>
							<p className={styles.release_date}>{`${day} ${month} ${year}`}</p>
						</div>
					</aside>
				</section>
			</Link>
		</li>
	);
}
function RecommendedArticleCard(props: tRecommendedArticleCard) {
	const { category, date, excerpt, image, title, uri } = props;
	const { day, month, year } = getDate({
		date: date,
		type: "short",
	});
	return (
		<li className={styles.recommended_article_card}>
			<Link className={styles.box} href={uri}>
				<div className={styles.image_box}>
					<figure className={styles.image}>
						<Image
							alt={image.altText}
							fill
							loading="lazy"
							src={image.sourceUrl}
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
							title={image.title}
							quality={40}
						/>
					</figure>
				</div>
				<section className={styles.details}>
					<article className={styles.content}>
						<header className={styles.title_box}>
							<h3
								className={styles.title}
								dangerouslySetInnerHTML={{ __html: title }}
							/>
						</header>
						<p
							className={styles.excerpt}
							dangerouslySetInnerHTML={{
								__html: excerpt.substring(0, 115).trim() + "...",
							}}
						/>
					</article>
					<aside className={styles.info}>
						<Link className={styles.category} href={category.uri}>
							{category.name}
						</Link>
						<p className={styles.release}>
							<i className={styles.release_icon}>
								<BsCalendar2Date />
							</i>
							<span
								className={styles.release_date}
							>{`${day} ${month} ${year}`}</span>
						</p>
					</aside>
				</section>
			</Link>
		</li>
	);
}
export default function BlogCard(props: tBlogCard): React.ReactNode | null {
	const { category, date, image, title, uri, variant } = props;

	if (variant === "home") {
		const { author } = props;
		return (
			<HomeArticleCard
				author={author}
				category={category}
				date={date}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	} else if (variant === "blog") {
		const { author, excerpt } = props;
		return (
			<BlogArticleCard
				author={author}
				category={category}
				excerpt={excerpt}
				date={date}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	} else if (variant === "recommended") {
		const { excerpt } = props;
		return (
			<RecommendedArticleCard
				category={category}
				excerpt={excerpt}
				date={date}
				image={image}
				title={title}
				uri={uri}
			/>
		);
	} else return null;
}
