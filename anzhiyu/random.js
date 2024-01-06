var posts=["2024/01/01/hello-world/","2024/01/01/My-New-Post/","2024/01/03/2023年总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };