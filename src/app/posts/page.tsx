type User= {
    userId:number;
    id:number;
    title:string;
    body:string;
}

export default async function Users(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return (
        <div className="flex flex-col"> 
            {posts.map((user:User)=>(
                <div key={user.id}>
                    <h5>{user.userId}</h5>
                    <h6>{user.id}</h6>
                    <p>{user.title}</p>
                    <p>{user.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}