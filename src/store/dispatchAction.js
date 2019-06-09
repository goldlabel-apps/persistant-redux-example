import { getStore } from '../index';

const dispatchAction = (action) => {
    getStore().dispatch(action);
}

export default dispatchAction;
