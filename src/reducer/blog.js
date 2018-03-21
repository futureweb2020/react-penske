import { createAction, handleActions } from 'redux-actions'

export const actions = {
    loadRecentBlogPosts: 'blog/LOAD_RECENT_BLOG_POSTS',
    setLoading: 'blog/LOADING_RECENT_BLOG_POSTS',
    unsetLoading: 'blog/LOADED_RECENT_BLOG_POSTS',
    setRecentBlogPosts: 'blog/SET_RECENT_BLOG_POSTS'
};

export const setLoading = createAction(actions.setLoading);
export const unsetLoading = createAction(actions.unsetLoading);
export const setRecentBlogPosts = createAction(actions.setRecentBlogPosts);

const defaultState = { isRecentBlogLoading: false, recentBlogPosts: [] };

export default handleActions({
    [actions.setLoading]: (state, action) => ({ ...state, isRecentBlogLoading: true }),
    [actions.unsetLoading]: (state, action) => ({ ...state, isRecentBlogLoading: false }),
    [actions.setRecentBlogPosts]: (state, action) => ({
        ...state,
        recentBlogPosts: action.payload.recentBlogPosts
    })
}, defaultState);
