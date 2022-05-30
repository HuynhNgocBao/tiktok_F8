import * as request from '~/components/'

const fetchAPI = async()=>{
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