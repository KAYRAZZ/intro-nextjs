async function getPosts() {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzYyMmU0MmIwMTVkMmI2NGEzNjliNDE4YTdlNTYxYSIsInN1YiI6IjY1ZDVkMTkxMGU0ZmM4MDE4Njg0ZjY4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j20k-1Sg67KIXgdkjlSoPAvAY2PIV0tuS9jRFJHS1ys'
        }
    });
    const data = await res.json();
    return data.results;
}

export default async function Home() {
    const posts = await getPosts();
    console.log(posts);
    return (
        <div>
            {posts && posts.map((post, index) => (
                <div key={index}>
                    <span>{post.title}</span>
                </div>
            ))}
        </div>
    );
}