export interface CustomSearchItem {
  title: string;
  url: string;
  content: string;
  tags: string[];
}

export const customSearchItems: CustomSearchItem[] = [
  {
    title: "Builder",
    url: "/new",
    content: "Builder",
    tags: ["builder", "create", "new", "project", "setup"],
  },
  {
    title: "GitHub Repository",
    url: "https://github.com/AbdullahMukadam/tristack",
    content: "GitHub",
    tags: ["github", "source", "code", "repository", "contribute", "star"],
  },
  {
    title: "NPM Package",
    url: "https://www.npmjs.com/package/create-tristack",
    content: "NPM",
    tags: ["npm", "package", "install", "cli", "tool"],
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/abd_mukadam",
    content: "X",
    tags: ["twitter", "x", "social", "updates", "announcements", "follow"],
  },
];

export function filterCustomItems(
  items: CustomSearchItem[],
  searchQuery: string,
): CustomSearchItem[] {
  if (!searchQuery) return items;

  const searchLower = searchQuery.toLowerCase();
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchLower) ||
      item.content.toLowerCase().includes(searchLower) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
  );
}
