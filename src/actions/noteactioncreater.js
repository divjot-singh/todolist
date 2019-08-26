

export const saveNote = () => {
    return {type:'SAVE_NOTE_PENDING'}
}

export const saveNoteSuccess= (note) => {
    return {type:'SAVE_NOTE_SUCCESS',data:note}
}

export const saveNoteError= () => {
    return {type:'SAVE_NOTE_ERROR'}
}

export const deleteNoteSuccess = (id) => {
    return {type:'DELETE_NOTE_SUCCESS',note:id}
}

export const deleteNote = (id,todosRef) => {
    return function(dispatch){
        dispatch(saveNote());
        todosRef.child(id).remove(()=>{
            dispatch(deleteNoteSuccess(id));
        });
    }
}

export const saveNoteinFileStorage = (note,todosRef) => {
    return function(dispatch){
        dispatch(saveNote());
        if(note.id){
            todosRef.child("/"+note.id).update({title:note.title,content:note.content},function(error){
                if(error){
                    dispatch(saveNoteError());
                }
                else{
                    dispatch(saveNoteSuccess(note));
                }
            });
        }else{
            todosRef.push().set(note).then(function(result){
                dispatch(saveNoteSuccess(note));
            }).catch(function(err){
                dispatch(saveNoteError());
            });
        }
    }
}


