//store/index.js
import useDataStore from './data'

export default function useStore(){
    return {
        data:useDataStore()
    }
}
