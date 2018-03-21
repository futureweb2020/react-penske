import { RECENT_BLOG_API_URL } from '../config/basic';

export function getRecentBlogPosts() {
    return fetch(RECENT_BLOG_API_URL).then(response => {
        return response.json()});
}