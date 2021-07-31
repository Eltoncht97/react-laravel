import axios from "axios"
import { types } from "../types/types"

export const startLoadingNotes = () => {
    return async(dispatch) => {
        const token = localStorage.getItem('token') || "";
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        };
        console.log(config)
        const response = await axios.get('/api/notes', config);
        const notas = response.data;
        dispatch( loadNotes(notas));
    }
}

export const loadNotes = ( notes ) => ({
    type: types.loadNotes,
    payload: {notes}
})
