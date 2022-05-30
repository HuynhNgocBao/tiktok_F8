import * as request from '~/utils/request'

const fetchAPI = async(q, )=>{
    try {
        const res = await request.get('users/search', {
            params: {
                q: debounced,
                type: 'less',
            }
        });
        setSearchResult(res.data);
        setLoading(false);
    } catch (error) {
        setLoading(false);
    }
}
fetchAPI();