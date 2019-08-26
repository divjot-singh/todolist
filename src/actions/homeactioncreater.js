

export const loadingNotes = () => {
    return {type:'LOADING_NOTES'}
}
export const loadNotesSuccess = (data) => {
    return {type:'NOTES_LOAD_SUCCESS',notes:data}
}
export const loadNotes = (todosRef) => {
    return function(dispatch){
        dispatch(loadingNotes());
        todosRef.on('value', (snapshot) => {
            let notes=[];
            const data=snapshot.val();
            for(let key in data){
                let note={...data[key],id:key};
                notes.push(note);
            }
            dispatch(loadNotesSuccess(notes));
        });
    }
}

export const closeModal = () => {
    return {type:'CLOSE_MODAL'}
}

export const showModal = () => {
    return {type:'SHOW_MODAL',popuptype:"confirm-dialog"}
}