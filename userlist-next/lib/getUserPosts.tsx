export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: {revalidate: 60}}
  );
  if (!res) {
    return undefined
  }
  return res.json();
}
