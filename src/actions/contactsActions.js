export const addContact = (newContact) => {
    return(dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        firestore.collection("contact").add(newContact).then(res =>{
            console.log("contact added");
        })
        .catch(err => {console.log("there was an error")})
    }
    // newContact.id=Math.random().toString()
    // return {
    //     type: "ADD_CONTACT",
    //     payload: newContact
    // }
}

//action creator for deleting contact
export const deleteContact = (contactId) => {
    console.log("action-fired", contactId)
    return (dispatch, getState, {getFirestore}) => {
            const firestore = getFirestore();
            firestore.collection("contact").doc(contactId).delete()
            .then(res => {console.log("contact deleted sucessfull")})
            .catch(err => {console.log ("contact could not be deleted")})
        }
}

//action creator for editing contact
export const editContact = (updatedContact) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("contact").doc(updatedContact.id).set(updatedContact)
        .then(res => {console.log ("contact updated sucessfull")})
        .catch(err => {console.log ("contact could not be updated")})
    }
};