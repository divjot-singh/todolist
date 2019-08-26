const initialstate={
    notes:[],
    loading:false,
    error:false,
    showPopup:false,
    popuptype:"popup",
    user:"user1"
};

export default function notereducer (state=initialstate,action){
    switch(action.type){
        case 'SAVE_NOTE_PENDING':
            return {...state, loading:true};
        case 'SAVE_NOTE_SUCCESS':
            const note=[...state.notes,action.data];
            const newState={...state, note,showPopup:true,popuptype:action.popuptype || state.popuptype , loading:false}
            return newState;
        case 'SAVE_NOTE_ERROR':
            return {...state, loading:false,showPopup:true, popuptype:action.popuptype || state.popuptype,error:true}
        case 'CLOSE_MODAL':
            return {...state, showPopup:false, popuptype:initialstate.popuptype}
        case 'LOADING_NOTES':
            return {...state,loading:true}
        case 'NOTES_LOAD_SUCCESS':
            return {...state,notes:action.notes,loading:false}
        case 'NOTES_LOAD_ERROR':
            return {...state,loading:false,showPopup:true, popuptype:action.popuptype || state.popuptype,error:true}
        case 'DELETE_NOTE_SUCCESS':
            let newNotes=state.notes.filter((note) => note.id!==action.note)
            return {...state,notes:newNotes}
        case 'SHOW_MODAL':
            return {...state,showPopup:true, popuptype:action.popuptype || state.popuptype}
        default:
            return state;
    }
}