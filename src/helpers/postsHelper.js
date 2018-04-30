export class PostsHelper {
    static filterPostsByTitleOrBody(posts, searchText) {
        let newPostsList = [];
        if(!searchText) {
            newPostsList = posts;
        }
        newPostsList = posts.filter((post) => {
            const postTitle = post.title.toLowerCase();
            const postBody = post.body.toLowerCase();
            const actionSearchText = searchText.toLowerCase();
            //console.log(`check if ${postTitle} contains ${actionSearchText}:`);
            if(postTitle.includes(actionSearchText) || postBody.includes(actionSearchText)) {
                return true;
            }
            return false;
        })
        return newPostsList;
    }
}