
export default {
    namespace: 'home',
    state: {
        minenav:{
            couponstatus:1,
            couponActive:0
        }
    },
    reducers: {
        setminenav(state :any , data : any){
            return {
                ...state,
                minenav:data.data
            }
        }
    },
    effects: {
        *saveMineNavStatus(status:any , {call ,put }:any){
            yield put({
                type:'setminenav',
                data:status.data
            })
        }
    }
};