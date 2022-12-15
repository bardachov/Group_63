
/** Demo example of async await */
const updateLastCommentAsync = (postId, commentBody) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(post => {
    
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {

      return fetch(`https://jsonplaceholder.typicode.com/comments/${comments[comments.length-1].id}`)
      .then(response => response.json())
      .then(lastComment => {

        return fetch(`https://jsonplaceholder.typicode.com/comments/${lastComment.id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            body: commentBody,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(response => response.json())
        .then(updatedComment => {
          return updatedComment
        })

      })

    })

  })
}

const updateLastComment = async (postId, commentBody) => {
  
  // const post = 
  // await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  // .then(response => response.json())

  // const comments = 
  // await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
  // .then(response => response.json());

  // const lastComment = 
  // await fetch(`https://jsonplaceholder.typicode.com/comments/${comments[comments.length-1].id}`)
  // .then(response => response.json());
  
  // const updatedComment = 
  // await fetch(`https://jsonplaceholder.typicode.com/comments/${lastComment.id}`, {
  //   method: 'PATCH',
  //   body: JSON.stringify({
  //     body: commentBody,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  // .then(response => response.json());

  
  // console.log(post)
  // console.log(comments)
  // console.log(lastComment)
  // console.log(updatedComment)
  
  // return updatedComment

  const [post, comments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(response => response.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.json())
  ]);

}

updateLastComment(1, 'Hello, this is updated body of last comment for post')
// updateLastCommentAsync(1, 'Hello, this is updated body of last comment for post')




/** Kahoot */

//1
// const getUserWrong = async () => {
//   const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-11-14&sortBy=publishedAt&apiKey=758eaee05362425590906fb4540c32ad';
//   const response = fetch(url);
//   const json = response.json();
  
//   console.log(json)
// }

// getUserWrong()

const getUserCorrect = async () => {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-12-14&sortBy=publishedAt&apiKey=758eaee05362425590906fb4540c32ad')
  const result =  await response.json();
  console.log(result)

  // .then(response => response.json())
  // .then(result => {
  //   console.log(result)
  // })  
}

// getUserCorrect()

//2
const foo = async () => {
  // throw new Error('Whoops')
  throw 'This is an error'
}

// foo()
// .then(value => console.loog(value))
// .catch(err => {
//   console.log(err)
//   console.log(err.name)
//   console.log(err.message)
//   console.log(err.stack)
// })



// Questions
