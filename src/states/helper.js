export const getAuth = async()=>{
  const auth =   window.localStorage.getItem('@auth')
  return auth != null? JSON.parse(auth):null;
}
export const setAuth = async(user)=>{
    const userData = JSON.stringify(user)
    window.localStorage.setItem('@auth', userData)
}
export const clearAuth = async()=>{
    window.localStorage.removeItem('@auth')
}

export const profileUploads =async(image, id)=>{
  const data = new FormData();

  // if(image.length>0){
  //   image.forEach((img,i)=>{
      data.append('file', image);
  //   })
  // }
  const response = await fetch(`/api/uploadImage`, {
    method: 'POST',
    body: data
  })
  const res = await response.json()
  return res.status;
}

export const createPost =async(post,user_id, image)=>{
  const data = new FormData();

  // if(image.length>0){
  //   image.forEach((img,i)=>{
    
      for(let i = 0; i< image.length; i++){
        data.append('file', image[i]);
      }
      data.append('user_id', user_id);
      data.append('post', post);
  //   })
  // }
  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: data
  })
  const res = await response.json()
  return res;
}
export const createJobs =async(jobs, id)=>{
  const response = await fetch(`/api/jobs`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      jobs:jobs,
      user_id:id
    })
  })
 const ress = await response.json()
 return ress;
}

export const createChats =async(message, user_id,receiver_id)=>{
  const response = await fetch(`/api/message`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      message:message,
      user_id:user_id,
      receiver_id:receiver_id
    })
  })
 const ress = await response.json()
 return ress;
}
export const updateUser =async(status, id,friendId)=>{
  console.log(friendId)
  const response = await fetch(`/api/update_user`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      status:status,
      user_id:id,
      friendId
    })
  })
 const ress = await response.json()
 return ress;
}

export const updateFriend =async(status, id,friendId)=>{
  console.log(friendId)
  const response = await fetch(`/api/update_friend`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      status:status,
      user_id:id,
      friendId
    })
  })
 const ress = await response.json()
 return ress;
}

export const createNotifications =async(notifications, id, notification_item_id,type)=>{
  const response = await fetch(`/api/${type?'notifications':'notification_item_id'}`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      notification:notifications,
      user_id:id,
      notification_item_id:id
    })

  })
  const sees = await response.json()
  return sees;

}
export const createComments =async(comments, id, post_id,type)=>{
  const response = await fetch(`/api/${type?'comments':'replies'}`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      comment:comments,
      user_id:id,
      post_id:post_id

    })

  })
  const resps = await response.json()
  return resps;

}


// {
//   name:'Victory'
// }
// {
//   "name":"Victory"
// }

export const getComment =async( id)=>{
  const response = await fetch(`/api/comment?post_id=${id}`, {
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })
  const resn = await response.json()

  return resn;
}

export const getReplies =async(post_id, comment_id)=>{
  const response = await fetch(`/api/replies?post_id=${post_id}&comment_id=${comment_id}`, {
    method: 'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })
  const resn = await response.json()

  return resn;
}
export const getPost =async()=>{
  const response = await fetch(`/api/posts`, {
    method: 'GET',
  })
  const res = await response.json()
  return res;
}


