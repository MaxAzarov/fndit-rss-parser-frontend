export interface FeedItem {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  "content:encoded": string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  isoDate: string;
}
