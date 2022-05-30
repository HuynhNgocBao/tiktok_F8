import * as request from '~/utils/request'

const fetchAPI = async(q, type='less')=>{
    try {
        const res = await request.get('users/search', {
            params: {
                q,
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