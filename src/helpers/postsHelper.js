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
            if(postTitle.indexOf(actionSearchText) > -1 || postBody.indexOf(actionSearchText) > -1) {
                return true;
            }
            return false;
        })
        return newPostsList;
    }
}