async function getUserPosts() {
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    );
    console.log(userResponse);
    const user = await userResponse.json();
    console.log(user);
  } catch (error) {
    console.log("에러발생", err.message);
  }
}

getUserPosts();
