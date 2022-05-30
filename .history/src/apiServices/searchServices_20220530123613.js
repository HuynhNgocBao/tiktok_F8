import * as request from '~/utils/request'

const fetchAPI = async(q, type='less')=>{
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            }
        });
        return res.data;
    } catch (error) {
        setLoading(false);
    }
}
fetchAPI();